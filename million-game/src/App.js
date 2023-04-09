import React, { useEffect, useState } from "react";
import AnsQues from "./components/AnsQues";
import "./app.css";
import { moneyTable, QA_ARRAY } from "./money&Questions";
import Timer from "./components/Timer";

function App() {
  const data = QA_ARRAY;
  const pyramid=moneyTable;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timerIsCalc, SetTimerIsCalc] = useState(true);
  const [valid, setValid] = useState(true);
  

  let amountWon=(pyramid.filter((el)=>(el.id===questionNumber-1))[0]?.amount) ;
  amountWon=amountWon?amountWon:0;

  useEffect(()=>{
    SetTimerIsCalc(true) ;
    if(questionNumber===17){
      amountWon="$ 1000000"
      setValid(false);
    }

  },[questionNumber,amountWon])
  // if(won){
  //   amountWon="$ 1000000" ;
  // }
  // useEffect(()=>{

  // },[])

  return (
    <div className="app">
      {valid && <div className="main">
        <div className="top">
          <Timer timerIsCalc={timerIsCalc} SetTimerIsCalc={SetTimerIsCalc} setValid={setValid} ></Timer>
        </div>

        <hr></hr>

        <div className="bot">
          <AnsQues
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            data={data}
            setValid={setValid}
            SetTimerIsCalc={SetTimerIsCalc}
            
          ></AnsQues>
        </div>
      </div>}

      {!valid && <div className="main">{"you earned"+amountWon}</div>}

      <div className="money">
        <ul className="moneyList">
          {moneyTable.map((el) => (
            <li
              className={
                el.id === questionNumber
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
              key={el.id}
            >
              <span className="moneyListItemNumber">{el.id}</span>
              <span className="moneyListItemAmount">{el.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
