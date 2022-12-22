import { REMOVE_TESTS, SET_CREATEDTESTS, UPDATE_TESTS } from "./actions";

const initialState = [];

export const createdTestsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_CREATEDTESTS) {
    return payload;
  }

  if (type === UPDATE_TESTS) {
    return payload;
  }

  if (type === REMOVE_TESTS) {
    return {};
  }

  return state;
};
