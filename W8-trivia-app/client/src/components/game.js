import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);

    const loadData = () => {
        fetch('http://localhost:5000/api/game')
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
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                if (question.type == "boolean" ){
                   return <QuestionCardTF key={index} question={question} />
                }else{
                    return <QuestionCardMC key={index} question={question}/>
                }
                
              
            })}
        </div>
    )

}

export default Game;
