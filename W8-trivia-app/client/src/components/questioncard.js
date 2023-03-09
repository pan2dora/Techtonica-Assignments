const QuestionCard = (props) => {
  if(props.question.type === "boolean"){
    return (
      <div className={"question-section"}>
        <div className="question-text">{props.question.question}</div>
        <div className="answer-section">
          <div>
            <button>True</button>
            <button>False</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"question-section"}>
        <div className="question-text">{props.question.question}</div>
        <div className="answer-section">
          <div>
            <button>Multiple</button>
            <button>Choice</button>
          </div>
        </div>
      </div>
    );

  }
  }
 
  
  /*  
    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button>True</button>
		<button>False</button>
        </div>
      </div>
    );
  };
  */

export default QuestionCard;