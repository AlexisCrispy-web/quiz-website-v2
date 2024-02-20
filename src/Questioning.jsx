import React, { useRef, useEffect } from 'react';

export default function Questioning({ questionsList, handleAnswer, questionNum }) {

  const containerRef = useRef(null);

  useEffect(()=> {
    containerRef.current.classList.add('animation-container');

    setTimeout(() => {
      containerRef.current.classList.remove('animation-container');
    }, 600);
  });

  return(
    <div ref={containerRef} className="quiz-container">
      <h2>{questionNum + 1}. {questionsList.question}</h2>
      <div className="choices-container">
        {questionsList.choices.map((choice, key) => <button key={key} onClick={() => handleAnswer(choice)}>{choice}</button>)}
      </div>
    </div>
  );
}