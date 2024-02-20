import React, { useEffect, useRef } from 'react';

export default function Results({ totalPoints, handleStopGame, questions, handlePlayerAnswers }) {

  const containerRef = useRef(null);
  const backRef = useRef(null);
  const showResultsRef = useRef(null);
  const resultsContainerRef = useRef(null);

  useEffect(()=> {
    containerRef.current.classList.add('animation-container');

    setTimeout(() => {
      backRef.current.classList.add('animation-container');
      backRef.current.style.opacity = '100%';

      setTimeout(() => {
        showResultsRef.current.classList.add('animation-container');
        showResultsRef.current.style.opacity = '100%';
      }, 500)
    },1000);

  });

  function showResults() {
    resultsContainerRef.current.style.opacity = "100%";
    resultsContainerRef.current.classList.add('animation-container');
  }

  return(
    <>
      <h2 ref={containerRef} className="points-container">You scored {totalPoints} {totalPoints > 1 ? "Points" : "Point"}!</h2>
      <button ref={backRef} className=' back-btn style-btn' onClick={handleStopGame}>Go Back</button>
      <button ref={showResultsRef} className='show-btn style-btn' onClick={showResults}>Show Results</button>
      
      <div ref={resultsContainerRef} className='results-container'>
        {questions.map((question, key) => {
          return(
            <div className='result-container' key={key}>
              <div className='result-question'>{key + 1}. {question.question}</div>
              <div className='result-ans-container'>
                <div><b>Correct Answer:</b> {question.correctAnswer}</div>
                <div><b>Your Answer:</b> {handlePlayerAnswers[key]}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}