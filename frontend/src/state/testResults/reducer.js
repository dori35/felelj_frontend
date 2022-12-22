import { REMOVE_TESTRESULTS, SET_TESTRESULTS } from "./actions";

const initialState = [];

export const TestResultsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_TESTRESULTS) {
    return payload;
  }

  if (type === REMOVE_TESTRESULTS) {
    return {};
  }

  return state;
};
