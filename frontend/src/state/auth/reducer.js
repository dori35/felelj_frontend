import { ADD_USER, STORE_USER, REMOVE_USER, SET_PROFILE } from "./actions";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === STORE_USER) {
    return payload;
  }

  /*
  if (type === ADD_USER) {
    return payload;
  }*/

  if (type === REMOVE_USER) {
    return {};
  }

  if (type === SET_PROFILE) {
    return { ...state, ...payload };
  }

  return state;
};
