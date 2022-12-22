import { REMOVE_STARTTEST, SET_RESULTS, SET_STARTTEST } from "./actions";

const initialState = [];

export const StartTestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_STARTTEST) {
    return payload;
  }

  if (type === SET_RESULTS) {
    return { ...state, results: payload };
  }

  if (type === REMOVE_STARTTEST) {
    return {};
  }

  return state;
};
