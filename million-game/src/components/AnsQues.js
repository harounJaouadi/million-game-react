import { useState } from "react";


const AnsQues = function ({questionNumber,data,setQuestionNumber,setValid,SetTimerIsCalc}) {



    const [checkClasses,setCheckClasses]=useState({chosen:"",check:false});
    
  const currentAnswersObject = data?.filter((el) => el?.id === questionNumber)[0];
  const currentAnswers = currentAnswersObject?.answers;
  const currentQuestion = currentAnswersObject?.question;
  
  const theValidAnswer = currentAnswers?.filter((el) => el.correct)[0].text;
  

  const chooseAnswerHandler = function (e) {
    const isValid = theValidAnswer === e.target.outerText;
    

    const chosenAnswer = e.target.outerText;
    setCheckClasses({chosen:chosenAnswer,check:isValid});
    //correct choice
    
    setTimeout(() => {
        setCheckClasses({chosen:"",check:false});
        if(isValid){
            
            setQuestionNumber((prev) => prev + 1);
            SetTimerIsCalc(false) ;
            
        }
        else{
            setValid(isValid) ;
            SetTimerIsCalc(false) ;
        }
        
    }, 1000);
    
    
    
  };

  const checkValid = function (text) {
    
    if(text===checkClasses.chosen){
        if(checkClasses.check){
            return "correct" ;
        }else{
            return "wrong";
        }
    }else{
        return "" ;
    }
        
  };

  return (
    <div className="ansQues">
      <div className="question">{currentQuestion}</div>
      <div className="answers">
        {currentAnswers?.map((el) => (
          <div
            className={"answer "+checkValid(el.text) }
            key={el.text}
            onClick={chooseAnswerHandler}
          >
            {el.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnsQues;
