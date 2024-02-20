import React, { useState, useEffect, useRef } from 'react';
import Questioning from './Questioning.jsx';
import Results from './Results.jsx';

export default function Quiz({ currQuestions, handleStopGame }) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [points , setPoints] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState([]);
  
  const checkAnswer = (choice) => {
    if(choice === currQuestions[currQuestion].correctAnswer) {
      setPoints(c => c + 1);
    }

    setCurrQuestion(c => c + 1);
    setPlayerAnswers(p => [...p, choice]);
  }


  return(
    currQuestions[currQuestion] ?
      <Questioning questionsList={currQuestions[currQuestion]} handleAnswer={checkAnswer} questionNum={currQuestion}/> : 
      <Results totalPoints = {points} handleStopGame={handleStopGame} questions={currQuestions} handlePlayerAnswers={playerAnswers} />
  );
}