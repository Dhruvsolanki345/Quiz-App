import * as actionTypes from "../consatnt";

const initialState = {
  answers: {},
  selectedQuestion: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer,
        },
      };
    case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        selectedQuestion: state.selectedQuestion + 1,
      };
    case actionTypes.PREV_QUESTION:
      return {
        ...state,
        selectedQuestion: state.selectedQuestion - 1,
      };
    case actionTypes.JUMP_TO_QUESTION:
      return {
        ...state,
        selectedQuestion: action.questionId,
      };
    case actionTypes.RESET:
      return {
        answers: {},
        selectedQuestion: 0,
      };
    default:
      return state;
  }
};

export default reducer;
