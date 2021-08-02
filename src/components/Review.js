import React from "react";
import "../css/Review.css";

function Review({
  answers,
  totalLength,
  questionIndex,
  onJumpToQuestion,
  setIsOpen,
}) {
  const onJumpToQuestionHandler = (index) => {
    const data = {
      questionId: index,
    };
    onJumpToQuestion(data);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="review">
      <div onClick={onClose} className="close">X</div>
      <div className="review_info">
        <div className="info_attempted">
          <span className="attempted transparent">1</span>
          <span>Answered</span>
        </div>
        <div className="info_attempted">
          <span className="not_attempted transparent">1</span>
          <span>Not Answered</span>
        </div>
      </div>
      <div className="review_elements">
        {Array(totalLength)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              onClick={() => onJumpToQuestionHandler(i)}
              className="review_element"
            >
              <span className={`${answers[i] ? "" : "not_"}attempted large`}>
                {i + 1}
              </span>
              <span
                className="indicator"
                style={
                  questionIndex === i
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                &#8657;
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Review;
