import Home from './Home.jsx';
import Quiz from './Quiz.jsx';
import React, { useState } from 'react';

function App() {
  const [isNotStart, setIsNotStart] = useState(true);
  const [currSubject, setIsCurrSubject] = useState(null);

  const subjects = [
    {
      name: "General Knowledge",
      img: '/general-knowledge.jpg',
      questions: [
        {question: "What is the capital city of Germany?",
        choices: ["London", "Paris", "Berlin", "Rome"],
        correctAnswer: "Berlin"},
        {question: "What is the chemical symbol for water?",
        choices: ["Wa", "Fe", "H2O", "Al"],
        correctAnswer: "H2O"},
        {question: "What is the largest planet in our solar system?",
        choices: ["Jupiter", "Neptune", "Earth", "Venus"],
        correctAnswer: "Jupiter"},
        {question: "What is the capital of Japan?",
        choices: ["Manila", "New York", "Seoul", "Tokyo"],
        correctAnswer: "Tokyo"},
        {question: "Who discovered gravity when an apple fell on his head?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Isaac Newton"}
      ]
    },
    {
      name: "History",
      img: '/rome.jpg',
      questions: [
        {question: "Year of American Declaration of Independence?",
         choices: ["1776", "1789", "1804", "1812"],
         correctAnswer: "1776"},
        {question: "Who painted the Mona Lisa?",
         choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
         correctAnswer: "Leonardo da Vinci"},
        {question: "First president of the United States?",
         choices: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
         correctAnswer: "George Washington"},
        {question: "Who wrote 'Romeo and Juliet'?",
         choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
         correctAnswer: "William Shakespeare"},
        {question: "Location of the ancient pyramids?",
         choices: ["Greece", "Egypt", "Rome", "China"],
         correctAnswer: "Egypt"}
      ]
    },
    {
      name: "Programming",
      img: '/js-poster.jpg',
      questions: [
        {
          question: "What is a programming language?",
          choices: ["Text Editor", "Coding tool", "Form of math", "Social network"],
          correctAnswer: "Coding tool"
        },
        {
          question: "It is used to create the structure of a webpage.",
          choices: ["HTML", "PHP", "SQL", "C#"],
          correctAnswer: "HTML"
        },
        {
          question: "What is JavaScript used for?",
          choices: ["Interactive web", "Database", "Operating system", "Hardware"],
          correctAnswer: "Interactive web"
        },
        {
          question: "Comment symbol in JavaScript?",
          choices: ["//", "/* */", "#", "--"],
          correctAnswer: "//"
        },
        {
          question: "Which is not a programming language?",
          choices: ["Java", "HTML", "C++", "Assembly"],
          correctAnswer: "HTML"
        }
      ]
    }
  ];


  function startGame(index) {
    setIsNotStart(!isNotStart);
    setIsCurrSubject(index);
  }

  function stopGame() {
    setIsNotStart(!isNotStart);
  }

  return(
    <main>
      <h1>Quiz Time!</h1>
      {isNotStart ? 
        <Home allSubjects={subjects} handleStartGame = {startGame} /> : 
        <Quiz currQuestions = {subjects[currSubject].questions} handleStopGame={stopGame}/>}
    </main>
  );
}

export default App
