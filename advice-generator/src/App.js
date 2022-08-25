import divider from "./img/pattern-divider-desktop.svg";
import dice from "./img/icon-dice.svg";
import "./App.css";
import {useState} from 'react';

function App() {

  const [{advice, adviceId}, setAdvice] = useState({});

  const generate = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(data=> data.json())
    .then(json=>setAdvice({advice:json.slip.advice,adviceId:json.slip.id}))

    console.log(advice);
  };

  return (
    <div className="container">
      <div className="generator">
        <p className="advice--header">ADVICE #{adviceId}</p>
        <p className="advice--text">
          "{advice}"
        </p>
        <img src={divider} alt="" className="divider" />
        <div onClick={generate} className="dice-wrapper">
          <img src={dice} alt="" className="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
