import React, { useState } from 'react';

const App = () => {
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Mars',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  
  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      
      console.log('User Answers:', userAnswers);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {currentQuestion < quizData.length ? (
        // Display the current question and options
        <div>
          <h2>{quizData[currentQuestion].question}</h2>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Quiz completed, show results or a completion message
        <div>
          <h2>Quiz Completed!</h2>
          <p>Thank you for participating.</p>
        </div>
      )}
    </div>
  );
};

export default App;
