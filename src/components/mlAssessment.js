import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Quiz from 'react-quiz-component';
import Header from '../components/header';
import Footer from '../components/footer';
import LoadingAnimation from '../components/loadingAnimation';

const MlAssessment = () => {
  const { role } = useParams();
  const [quiz, setQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('job_role', role);

        const response = await axios.post('http://127.0.0.1:5000/quiz', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setIsLoading(false);
      }
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
        ) : quiz && quiz.question ? (
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
