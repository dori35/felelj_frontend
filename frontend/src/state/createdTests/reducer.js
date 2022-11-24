import { SET_CREATEDTESTS, UPDATE_TESTS } from "./actions";

const initialState = [];

export const createdTestsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_CREATEDTESTS) {
    return payload;
  }

  if (type === UPDATE_TESTS) {
    return payload;
  }

  return state;
};
