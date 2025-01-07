import React from "react";
import Quiz from "react-quiz-component";
import Header from "../components/header";
import Footer from "../components/footer";
import StepProgressBar from "./stepProgressBar";
import "../styles/assessment.css";

const Assessment = () => {
     const quiz = {
        "quizTitle": "Machine Learning Engineer Quiz",
        "quizSynopsis": "This quiz tests advanced knowledge and skills required for a Machine Learning Engineer. It includes questions on various aspects of machine learning, including algorithms, data processing, and model evaluation.",
        "nrOfQuestions": "10",
        "questions": [
          {
            "question": "Which of the following is a common algorithm used for classification?",
            "questionType": "text",
            "questionPic": "", // No picture for this question
            "answerSelectionType": "single",
            "answers": [
              "Linear Regression",
              "K-Nearest Neighbors",
              "Apriori",
              "K-Means"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "K-Nearest Neighbors (KNN) is a common algorithm used for classification.",
            "point": "10"
          },
          {
            "question": "Which technique is used to prevent overfitting in machine learning models?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Feature Scaling",
              "Regularization",
              "Clustering",
              "Gradient Descent"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Regularization techniques, such as L1 and L2 regularization, are used to prevent overfitting in machine learning models.",
            "point": "10"
          },
          {
            "question": "In the context of neural networks, what is backpropagation?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "A process to initialize weights",
              "A process to update weights",
              "A method to perform dimensionality reduction",
              "A technique for data augmentation"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Backpropagation is a process used to update the weights in a neural network by propagating the error backward through the network.",
            "point": "10"
          },
          {
            "question": "Which metric is commonly used to evaluate the performance of a classification model?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Mean Absolute Error",
              "Root Mean Squared Error",
              "Accuracy",
              "R-Squared"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Accuracy is a common metric used to evaluate the performance of a classification model.",
            "point": "10"
          },
          {
            "question": "Which of the following is a dimensionality reduction technique?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "PCA",
              "SVM",
              "Random Forest",
              "K-Means"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Principal Component Analysis (PCA) is a dimensionality reduction technique.",
            "point": "10"
          },
          {
            "question": "Which loss function is commonly used for binary classification tasks?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Mean Squared Error",
              "Logarithmic Loss",
              "Hinge Loss",
              "Huber Loss"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Logarithmic Loss, also known as Log Loss or Binary Cross-Entropy, is commonly used for binary classification tasks.",
            "point": "10"
          },
          {
            "question": "Which activation function is commonly used in hidden layers of a neural network?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Sigmoid",
              "ReLU",
              "Softmax",
              "Linear"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The ReLU (Rectified Linear Unit) activation function is commonly used in the hidden layers of a neural network.",
            "point": "10"
          },
          {
            "question": "What is the purpose of the learning rate in gradient descent?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "To determine the number of iterations",
              "To control the step size in weight updates",
              "To initialize the weights",
              "To normalize the input data"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "The learning rate controls the step size in weight updates during the gradient descent process.",
            "point": "10"
          },
          {
            "question": "Which of the following is a type of unsupervised learning?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "Regression",
              "Classification",
              "Clustering",
              "Reinforcement Learning"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Clustering is a type of unsupervised learning.",
            "point": "10"
          },
          {
            "question": "What is the purpose of cross-validation in machine learning?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
              "To increase the size of the training set",
              "To evaluate the model's performance",
              "To reduce the dimensionality of the data",
              "To prevent the vanishing gradient problem"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Cross-validation is used to evaluate the model's performance by partitioning the data into training and validation sets multiple times.",
            "point": "10"
          }
        ]
      };

    return (
        <div className="main">
            <Header />
            <StepProgressBar currentStep={3} />
            <div className="assessment">
                <h2 className="title">Machine Learning Engineer Assessment</h2>
                <Quiz quiz={quiz} shuffle={true} showInstantFeedback={false} continueTillCorrect={false} />
            </div>
            <Footer />
        </div>
    );
}


export default Assessment;   