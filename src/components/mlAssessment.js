import Quiz from 'react-quiz-component';
import Header from '../components/header';
import Footer from '../components/footer';


const MlAssessment = () => {
    const quiz = {
        "quizTitle": "Web Developer Quiz",
        "quizSynopsis": "Test your knowledge and skills as a web developer with this quiz. Covering topics from HTML, CSS, JavaScript to modern web development frameworks.",
        "nrOfQuestions": "5",
        "questions": [
          {
            "question": "Which HTML tag is used to define an internal style sheet?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "<style>",
              "<script>",
              "<css>",
              "<link>"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The <style> tag is used to define internal CSS.",
            "point": "10"
          },
          {
            "question": "What does CSS stand for?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Creative Style Sheets",
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Colorful Style Sheets"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "CSS stands for Cascading Style Sheets.",
            "point": "10"
          },
          {
            "question": "Which of the following is correct about JavaScript?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "JavaScript is an assembly language of the web.",
              "JavaScript is compiled.",
              "JavaScript is a programming language for the web.",
              "JavaScript is the same as Java."
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "JavaScript is a programming language primarily used for web development.",
            "point": "10"
          },
          {
            "question": "Which company developed React.js?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Google",
              "Microsoft",
              "Facebook",
              "Twitter"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "React.js was developed by Facebook.",
            "point": "10"
          },
          {
            "question": "Which of the following is a key feature of Flexbox?",
            "questionType": "text",
            "answerSelectionType": "multiple",
            "answers": [
              "Direction of the layout",
              "Alignment along the cross axis",
              "Equal spacing among elements",
              "Ability to use media queries"
            ],
            "correctAnswer": [1, 2, 3],
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Flexbox allows control over the direction, alignment, and spacing of elements within a container.",
            "point": "20"
          }
        ]
      };
      
    
    return (
        <div className="main">
            <Header />
            <div className="ml-assessment">
                <h2>Machine Learning Assessment</h2>
                <Quiz quiz={quiz} shuffle={true} showInstantFeedback={false} continueTillCorrect={false} />
            </div>
            <Footer />
        </div>
    );
}

export default MlAssessment;