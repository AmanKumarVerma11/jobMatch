/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import LoadingAnimation from '../components/loadingAnimation';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import StepProgressBar from './stepProgressBar';
import '../styles/mlAssessment.css';
import bcomet from '../assets/big-comet.svg';
import cometEmo from '../assets/comet-emoji.svg';
import comet from '../assets/comet.svg';
import ellipse from '../assets/ellipse.svg';
import orbit from '../assets/orbit.svg';
import scomet from '../assets/small-comet.svg';
import laptop from '../assets/laptop.png';

const MlAssessment = () => {
  const { role } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(1);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://127.0.0.1:5000/quizzes/${role}`);
        const quizData = response.data;
        console.log('Quiz data received:', quizData);
  
        if (quizData && Array.isArray(quizData.quiz) && quizData.quiz.every(question => question.hasOwnProperty('correct_answer') && question.hasOwnProperty('choices') && question.hasOwnProperty('question'))) {
          const formattedQuiz = {
            quizTitle: `Assessment for ${role}`,
            questions: quizData.quiz.map((question) => ({
              questionType: 'multipleChoice',
              question: question.question,
              answers: Object.entries(question.choices).map(([key, value]) => ({
                answerText: value,
                isCorrect: key === question.correct_answer,
              })),
              correctAnswer: question.correct_answer,
            })),
          };
          setQuiz(formattedQuiz);
        } else {
          console.error('Invalid response data format:', quizData);
          throw new Error('Invalid response data format');
        }
      } catch (error) {
        console.error('Failed to fetch quiz data:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchQuiz();
  }, [role]);
  
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };
  
  const handleNextQuestion = () => {
    if (selectedAnswer) {
      const currentQuestion = quiz.questions[currentQuestionIndex];
      const isCorrect = currentQuestion.answers.find(
        (answer) => answer.isCorrect && answer.answerText === selectedAnswer
      );
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handleSubmit = () => {
    const totalQuestions = quiz.questions.length;
    const percentage = (score / totalQuestions) * 100;
    setShowScore(true);
  };

  return (
    <div className="main">
      <Header />
      <div className='ellipse'>
                <img src={ellipse} alt="ellipse" />
            </div>
      <StepProgressBar currentStep={3} />

      <div className='bcomet'>
                <img src={bcomet} alt="comet" />
            </div>

            <div className='cometEmo'>
                <img src={cometEmo} alt="comet" />
            </div>

            <div className='comet'>
                <img src={comet} alt="comet" />
            </div>

            <div className='comet1'>
                <img src={comet} alt="comet" />
            </div>

            <div className='orbit'>
                <img src={orbit} alt="orbit" />
            </div>

            <div className='scomet'>
                <img src={scomet} alt="comet" />
            </div>

      <div className="ml-assessment">

        {isLoading ? (
          <LoadingAnimation />
        ) : quiz ? (
          <div className="quiz-container">
            <div className="quiz-title">{quiz.quizTitle}</div>
            {showScore ? (
              <div className="score-container">
                <div className="progress-bar">
                  <CircularProgressbar
                    value={(score / quiz.questions.length) * 100}
                    text={`${((score / quiz.questions.length) * 100).toFixed(0)}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: `rgba(62, 152, 199, ${(score / quiz.questions.length) * 100 / 100})`,
                      textColor: '#3e98c7',
                      trailColor: '#d6d6d6',
                      backgroundColor: '#3e98c7',
                    })}
                  />
                </div>
                <p className="score">Your score: {score} out of {quiz.questions.length}</p>
                {(score / quiz.questions.length) * 100 >= 80 ? (
                  <Link to={`/job-openings/${encodeURIComponent(role)}`} className="joblistingsBtn">
                    View Job Listings
                  </Link>
                ) : (
                  <>
                  <h3 className="score">Currently you're not applicable to apply for the jobs</h3>
                   <a href="https://quickref.me/" target="_blank" rel="noreferrer" className="joblistingsBtn" >Quick Reference</a>
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="question-container">
                  <div className="question-number">
                    Question {currentQuestionIndex + 1} of {quiz.questions.length}
                  </div>
                  <div className="question-text">{quiz.questions[currentQuestionIndex].question}</div>
                  <ul className="answers">
                    {quiz.questions[currentQuestionIndex].answers.map((answer, index) => (
                      <li key={index} className="answer">
                        <input
                          type="radio"
                          id={`answer-${index}`}
                          name="answer"
                          value={answer.answerText}
                          checked={selectedAnswer === answer.answerText}
                          onChange={() => handleAnswerSelect(answer.answerText)}
                        />
                        <label htmlFor={`answer-${index}`}>{answer.answerText}</label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="button-container">
                  {currentQuestionIndex < quiz.questions.length - 1 ? (
                    <button className="btn btn-primary" onClick={handleNextQuestion}>
                      Next
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Submit
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <>
          <img className="laptop" src={laptop} alt="laptop" />
          <p>No quiz data available.</p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MlAssessment;