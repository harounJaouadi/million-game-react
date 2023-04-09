import { useEffect, useState } from "react";

import useSound from "use-sound";
import correct from "../assests/sounds/src_sounds_correct.mp3";
import wrong from "../assests/sounds/src_sounds_wrong.mp3";
import play from "../assests/sounds/src_sounds_play.mp3";

const AnsQues = function ({
  setQuestionNumber,
  questionNumber,
  data,
  setFinish,
  setAmount,
  pyramid,
}) {
  const [letWrong] = useSound(wrong);
  const [letPlay] = useSound(play);
  const [letCorrect] = useSound(correct);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("");

  useEffect(() => {
    letPlay();
  }, [letPlay]);

  useEffect(() => {
    console.log("begin") ;
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  //must try it without useEffect

  const chooseHandler = function (el) {
    setSelectedAnswer(el);

    setTimeout(() => {
      if (el.correct) {
        setClassName("correct");
        setTimeout(()=>{letCorrect()},2000)
        setTimeout(() => {
          
          setQuestionNumber((prev) => prev + 1);

          setSelectedAnswer(null);
          setClassName("");
          setFinish(!el.correct);
          setAmount(pyramid[questionNumber - 1].amount);
        }, 3000);
      } else {
        setClassName("wrong");
        setTimeout(() => {
          setFinish(!el.correct);
          letWrong();
        }, 3000);
      }
    }, 2000);
  };

  return (
    <div className="ansQues">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((el) => (
          <div
            key={el.text}
            className={
              selectedAnswer === el ? "answer active " + className : "answer"
            }
            onClick={() => {
              chooseHandler(el);
            }}
          >
            {el.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnsQues;
