import { SET_RESULTS, SET_STARTTEST } from "./actions";

const initialState = [];

export const StartTestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_STARTTEST) {
    return payload;
  }

  if (type === SET_RESULTS) {
    return { ...state, ...payload };
  }

  return state;
};
