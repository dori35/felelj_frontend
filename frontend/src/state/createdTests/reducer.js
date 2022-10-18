import { SET_CREATEDTESTS } from "./actions";

const initialState = [];

export const createdTestsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_CREATEDTESTS) {
    return payload;
  }

  return state;
};
