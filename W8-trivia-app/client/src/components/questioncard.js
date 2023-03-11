import React, { useState } from 'react'

const QuestionCard = (props) => {
  let incorrectAnswersArray = props.question.incorrect_answers;
  let correctAnswers = props.question.correct_answer;
  // let answersShuffled = answersArray.Math.floor(Math.random()*answersArray.length)
  const newAnswerArray= incorrectAnswersArray.concat(correctAnswers)
const [answered,setAnswered] = useState(false)


const handleClickMC= (userAnswer) =>{
  if (userAnswer === props.question.correct_answer){
    setAnswered(true)
  }else{
    setAnswered(true)
   
  }
}

const handleClickTF= (userAnswer) =>{
  if (userAnswer === props.question.correct_answer){
    setAnswered(true)
  }else if(userAnswer === props.question.incorrect_answers){
    setAnswered(true)
   
  }
}

if (props.question.type ==="boolean"){
return (
<div className={"question-section"}>
      <div className="question-count">
        <span>Question {props.question_num}/{props.questions_count}</span>
      </div>
      <div className="question-text">{props.question.question}</div>

      <div className="answer-section">
        <div>
          
<button disabled = {answered} style ={{backgroundColor: "true" ? "white":"yellow"}} onClick={()=>handleClickTF()  }> True</button>
<button disabled = {answered} style ={{backgroundColor: "false" ? "white":"yellow"}} onClick={()=>handleClickTF()}>False</button>
        </div>git 
      </div>
    </div>
)

}else{

  return (
    <div className={"question-section"}>
      <div className="question-count">
        <span>Question {props.question_num}/{props.questions_count}</span>
      </div>
      <div className="question-text">{props.question.question}</div>

      <div className="answer-section">
        <div>
          

          {newAnswerArray.map(function (answers) {
            return <button disabled ={answered} onClick={()=>handleClickMC()}>{answers}</button>;
          })}
        </div>
      </div>
    </div>
  );
}};

export default QuestionCard;
