const QuestionCard = (props) => {
  let incorrectAnswersArray = props.question.incorrect_answers;
  let correctAnswers = props.question.correct_answer;
  // let answersShuffled = answersArray.Math.floor(Math.random()*answersArray.length)

  return (
    <div className={"question-section"}>
      <div className="question-count">
        <span>Question {props.question_num}/{props.questions_count}</span>
      </div>
      <div className="question-text">{props.question.question}</div>

      <div className="answer-section">
        <div>
          <button>{correctAnswers}</button>

          {incorrectAnswersArray.map(function (answers) {
            return <button>{answers}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
