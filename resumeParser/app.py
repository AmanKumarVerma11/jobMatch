from flask import Flask, render_template, request, jsonify
import os
from flask_cors import CORS
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader
from openai import OpenAI
from openai import OpenAIError
import json
import re
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'pdf'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def pdfreader(file_path):
    reader = PdfReader(file_path)
    text = ""
    for page_num in range(len(reader.pages)):
        page = reader.pages[page_num]
        text += page.extract_text()
    return text

def get_job_role(text):
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"), base_url="https://api.deepseek.com")
    try:
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[
                {"role": "system", "content": "You are job role recommendor system suggest jobs in precise format and advice to achieve them"},
                {"role": "user", "content": f"I'd like to leverage this data \n {text} \n  to identify the ideal job role for user and advice on how to pursue it and proivde me output into json format , the json object will contain the following keys first is 'ideal_job_role' an array of string , other is 'user' which is the string , and 'advice',it should not return any other job role only so that i can easily jsonify it."},
            ],
            max_tokens=1024,
            temperature=0.5,
            stream=False
        )
        output = response.choices[0].message['content']
        print("The output for job role is ", output)

        pattern = re.compile(r'{(.*)}', re.DOTALL)
        match = pattern.search(output)

        if match:
            result = json.loads("{" + match.group(1) + "}")
        else:
            return jsonify({"error": "No valid JSON found in the response"})

        return jsonify(result)
    except OpenAIError as e:
        return jsonify({"error": f"API error occurred: {e.message}"})

def generate_quizzes(job_role):
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"), base_url="https://api.deepseek.com")
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are an AI-based quiz system that suggests quizzes of easy level"},
            {"role": "user", "content": f"You are an AI model tasked with generating a multiple-choice quiz based on a provided job role. You will be given a job role, and you need to create a quiz consisting of 10 questions with their respective answer choices and correct answers. The questions should range from easy to medium difficulty and should be relevant to the skills, knowledge, and responsibilities associated with the given job role.\n\nFormat the output in JSON as follows:\nEach question should have four answer choices labeled 'A', 'B', 'C', and 'D'.\nThe correct answer should be specified separately for each question.\n\n{job_role}"},
        ],
        max_tokens=1024,
        temperature=0.8,
        stream=False
    )
    output = response.choices[0].message.content
    print("the output for quiz is ", output)
    json_data = json.loads(extract_json(output))
    return json_data

def extract_json(text):
    pattern = re.compile(r'{(.*)}', re.DOTALL)
    match = pattern.search(text)
    if match:
        return "{" + match.group(1) + "}"
    else:
        return ""

@app.route('/', methods=['GET', 'POST'])
def index():
    job_role = ""

    if request.method == 'POST':
        if 'file' not in request.files:
            return render_template('index.html', error='No file part')
        
        file = request.files['file']

        if file.filename == '':
            return render_template('index.html', error='No selected file')

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            text = pdfreader(file_path)
            job_role = get_job_role(text)
    

    return job_role

@app.route('/quizzes/<job_role>', methods=['GET'])
def get_quizzes(job_role):
    quizzes = generate_quizzes(job_role)
    return jsonify(quizzes)

if __name__ == '__main__':
    app.run(debug=True)