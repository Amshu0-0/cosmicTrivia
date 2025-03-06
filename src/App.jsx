import React from "react";
import './App.css';
import Header from "./components/Header";
import { questionList } from "./components/data";

import { useState } from "react";



const App = () => {
  const [showBack, setShowBack] = useState(false);

  function handleBack() {
    setShowBack(!showBack);
  }

  function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }



  const [index, setIndex] = useState(0);

  function handleNext() {
    setShowBack(false);
    setIndex(getRandomIndex(0, 9));
  }
  let questionData = questionList[index];

  return (
    <div className="App">
      <Header />
      <h3>Number of Card: 10</h3>
      <div className="card" onClick = {handleBack}>
          {showBack ? questionData.answer : questionData.question} 
      </div>
      <br></br>
      <button onClick={handleNext}>
        Next
      </button>
  
    </div>
  )
}
export default App;