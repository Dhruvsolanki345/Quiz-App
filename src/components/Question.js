import React from "react";
import "../css/Question.css";

function Question({
  question,
  questionIndex,
  selectedAnswer,
  setResultAnswer,
}) {
  let questionObj = null;
  const setAnswer = (option) => {
    const data = {
      questionId: questionIndex,
      answer: option,
    };
    setResultAnswer(data);
  };

  if (questionIndex !== -1) {
    const { question: questionText, options } = question;
    questionObj = (
      <>
        <div className="question_text"><p>{questionText}</p></div>
        {options.map((option) => (
          <div
            key={option}
            className={selectedAnswer === option ? "option_selected" : "option"}
            onClick={() => setAnswer(option)}
          >
            {option}
          </div>
        ))}
      </>
    );
  }

  return <div className="question">{questionObj}</div>;
}

export default Question;
