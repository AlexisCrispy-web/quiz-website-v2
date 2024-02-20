
import React, { useEffect, useRef } from 'react'

export default function Home({ allSubjects, handleStartGame }) {

  const subjectsRef = useRef(null);

  useEffect(() => {
    subjectsRef.current.classList.add('animation-container');
  });

  return(
    <div ref={subjectsRef} className="home-subjects-container">
      {allSubjects.map((subject, key) => {
        return(
          <div key={key} className="subject-container" onClick={() => handleStartGame(key)}>
            <div className="subject-img-container">
              <img src={subject.img}></img>
            </div>
            <div className="subject-title">{subject.name}</div>
            <div className="play-btn-container">
              <img className="play-btn" src="/play.svg"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}