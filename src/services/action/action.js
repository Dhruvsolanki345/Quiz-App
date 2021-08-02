import * as actionTypes from "../consatnt";

export const setAnswer = (data) => {
  return {
    type: actionTypes.SET_ANSWER,
    ...data,
  };
};

export const nextQuestion = () => {
  return {
    type: actionTypes.NEXT_QUESTION,
  };
};

export const prevQuestion = () => {
  return {
    type: actionTypes.PREV_QUESTION,
  };
};

export const jumpToQestion = (data) => {
  return {
    type: actionTypes.JUMP_TO_QUESTION,
    ...data
  };
};

export const resetStore = () => {
  return {
    type: actionTypes.RESET,
  };
};
