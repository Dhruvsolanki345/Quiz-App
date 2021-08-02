import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "../css/Home.css";
import Question from "./Question";
import Review from "./Review";
import Timer from "./Timer";

const questions = [
  {
    question: "Which game is played with five players on either side?",
    options: ["Basketball", "Volleyball", "Hockey", "Football"],
    answer: "Basketball",
  },
  {
    question: "Which of the following countries is landlocked?",
    options: ["Spain", "Italy", "Switzerland", "France"],
    answer: "Switzerland",
  },
  {
    question:
      "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    options: ["7", "10", "12", "13"],
    answer: "10",
  },
  {
    question: "The answer is really big.",
    options: [
      "THE ANSWER",
      "Really big",
      "An elephant",
      "The data given is insufficient",
    ],
    answer: "Really big",
  },
  {
    question:
      "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
    options: ["7", "10", "12", "13"],
    answer: "10",
  },
  {
    question: "The answer is really big.",
    options: [
      "THE ANSWER",
      "Really big",
      "An elephant",
      "The data given is insufficient",
    ],
    answer: "Really big",
  },
];

function Home(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onNextButtonHandler();
  }, []);

  const onPrevButtonHandler = () => {
    props.onPrevQuestion();
  };

  const onNextButtonHandler = () => {
    props.onNextQuestion();
  };

  const resetStoreHandler = () => {
    setIsSubmit(false);
    props.setResetStore();
  };

  const getScore = () => {
    let score = 0;
    questions.forEach((questionObj, index) => {
      if (questionObj.answer === props.answers[index]) score++;
    });
    return score;
  };

  const onSubmitQuizHandler = () => {
    setIsSubmit(true);
  };

  const openReview = () => {
    setIsOpen(true);
  };

  let nextButton = <button onClick={onNextButtonHandler}>NEXT</button>;
  if (props.currentIndex === questions.length - 1) {
    nextButton = <button onClick={onSubmitQuizHandler}>SUBMIT</button>;
  }
  let homeObj = null;

  let reviewObj = (
    <Review
      answers={props.answers}
      totalLength={questions.length}
      questionIndex={props.currentIndex}
      onJumpToQuestion={props.onJumpToQuestion}
      setIsOpen={setIsOpen}
    />
  );

  let mainContentObj = (
    <div className="main_content">
      <Timer setIsSubmit={setIsSubmit} timeInMinutes={5} />
      <Question
        question={questions[props.currentIndex]}
        selectedAnswer={props.answers[props.currentIndex]}
        questionIndex={props.currentIndex}
        setResultAnswer={props.setResultAnswer}
      />
      <div onClick={openReview} className="reviewBtn">
        <button>Review</button>
      </div>
      <div className="button_grp">
        <div className="prevbtn">
          {props.currentIndex > 0 ? (
            <button onClick={onPrevButtonHandler}>PREV</button>
          ) : null}
        </div>
        <div className="nextbtn">{nextButton}</div>
      </div>
    </div>
  );

  let browserView = (
    <>
    {reviewObj}
    {mainContentObj}
    </>
  );

  if (!isSubmit) {
    homeObj = (
      <div className="container">
        {isMobile
          ? isOpen
            ? reviewObj
            : mainContentObj
          : browserView}
      </div>
    );
  } else {
    homeObj = (
      <div className="score">
        <p>
          You have answered {getScore()} out of {questions.length} questions
          correctly
        </p>
        <button onClick={resetStoreHandler} className="score_button">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="home">
      <h1 className="heading">Quiz App</h1>
      {homeObj}
    </div>
  );
}

export default Home;
