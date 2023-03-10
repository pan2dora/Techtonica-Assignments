import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";


const Game = (props) => {

    const [questions, setQuestions] = useState([]);
const handleClick =(questionNum,userChoice)=>{
let newQuestionArray =[];
    for (let i =0;i<questions.length;i++){
//push copy of the current questions into my new question array but not in one shot
//make copy first 
//maybe modify 
//push
let question = {...questions[i]}
//this lets us know we are looking at the correct question in our state
if(questionNum === i+1){
question.questionChoice = userChoice;

}

newQuestionArray.push(question)

}
setQuestions(newQuestionArray)
}

    const loadData = () => {
        //url is backend
        fetch('http://localhost:5700/api/game')
            .then((response) => response.json())
            .then(data => {
                console.log("This is line 11", data.results);
                setQuestions(data.results);
            })
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="Container">
            
            {questions.map((question, index) => {
               
                    //these are questionCards the components given properties
                   return <QuestionCard key={index} question={question} questions_count={questions.length} question_num={index+1}/>
                
              
            })}
        </div>
    )

}

export default Game;
