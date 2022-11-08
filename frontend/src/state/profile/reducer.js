import { SET_PROFILE } from "./actions";

const initialState = {};

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === SET_PROFILE) {
    return payload;
  }

  return state;
};
