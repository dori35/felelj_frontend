import { SET_TESTRESULTS } from "./actions";

const initialState = [];

export const TestResultsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_TESTRESULTS) {
    return payload;
  }

  return state;
};
