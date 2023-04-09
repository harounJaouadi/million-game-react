import React, {  useState } from "react";
import AnsQues from "./components/AnsQues";
import "./app.css";
import { MONEY_TABLE, QA_ARRAY } from "./moneyTable";
import Timer from "./components/Timer";
import End from "./components/End";
import Start from "./components/Start";
const moneyTable=[...MONEY_TABLE] ;
const reversed=MONEY_TABLE.reverse();

function App() {
  const data = QA_ARRAY ;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [finish,setFinish]=useState(false) ;
  const [amount,setAmount]=useState("$ 0") ;
  const [begin,setBegin]=useState(false);


  const startHandler=function(){
    setBegin(true)  ;
  }

  return (
    <div className="app">
      {!begin && <Start click={startHandler}></Start>}
      {begin && <>
      <div className="main">
        
        {!finish && <><div className="top">
          <Timer  setFinish={setFinish}></Timer>
        </div>
        <hr></hr>

        <div className="bot">
          <AnsQues
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            data={data}
            setFinish={setFinish}
            setAmount={setAmount}
            pyramid={moneyTable}
          ></AnsQues>
        </div></>}
        {finish && <End amount={amount}></End>}

      </div>

      <div className="money">
        <ul className="moneyList">
          {reversed.map((el) => (
            <li className={"moneyListItem "+(el.id===questionNumber?"active":"")} key={el.id}>
              <span className="moneyListItemNumber">{el.id}</span>
              <span className="moneyListItemAmount">{el.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      </>}
    </div>
  );
}

export default App;
