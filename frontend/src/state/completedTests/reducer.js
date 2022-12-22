import { REMOVE_COMPLETEDTESTS, SET_COMPLETEDTESTS } from "./actions";

const initialState = [];

export const completedTestsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_COMPLETEDTESTS) {
    return payload;
  }

  if (type === REMOVE_COMPLETEDTESTS) {
    return {};
  }

  return state;
};
