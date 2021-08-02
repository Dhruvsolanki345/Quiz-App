import { connect } from "react-redux";
import * as action from "../services/action/action";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    currentIndex: state.answer.selectedQuestion,
    answers: state.answer.answers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextQuestion: () => dispatch(action.nextQuestion()),
    onPrevQuestion: () => dispatch(action.prevQuestion()),
    onJumpToQuestion: (data) => dispatch(action.jumpToQestion(data)),
    setResultAnswer: (data) => dispatch(action.setAnswer(data)),
    setResetStore: () => dispatch(action.resetStore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
