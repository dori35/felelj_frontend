import { SET_COMPLETEDTESTS } from "./actions";

const initialState = [];

export const completedTestsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_COMPLETEDTESTS) {
    return payload;
  }

  return state;
};
