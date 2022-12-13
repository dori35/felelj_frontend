import { SET_STARTTEST } from "./actions";

const initialState = [];

export const StartTestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_STARTTEST) {
    return payload;
  }

  return state;
};
