// MlAssessment.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Quiz from 'react-quiz-component';
import Header from '../components/header';
import Footer from '../components/footer';
import LoadingAnimation from '../components/loadingAnimation';

const MlAssessment = () => {
  const { role } = useParams();
  const [quiz, setQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect called with role:', role);
    const fetchQuiz = async () => {
      try {
        console.log('Fetching quiz data...');
        setIsLoading(true); // Set loading state to true before fetching data
        const response = await axios.get('http://127.0.0.1:5000/quiz', {
          data: {
            job_role: role,
          },
        });
        console.log('Response:', response);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
      setIsLoading(false); // Set loading state to false after fetching data
    };

    fetchQuiz();
  }, [role]);

  return (
    <div className="main">
      <Header />
      <div className="ml-assessment flex flex-col items-center justify-center">
        <h2 className='text-2xl'>Take your Assessment</h2>
        {isLoading ? (
          <LoadingAnimation />
        ) : quiz && quiz.questions ? (
          <Quiz quiz={quiz} shuffle={true} showInstantFeedback={false} continueTillCorrect={false} />
        ) : (
          <p>No quiz data available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MlAssessment;
