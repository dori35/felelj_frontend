import {
  REMOVE_FILLINGTEST,
  SEND_FILLINGTEST,
  SET_FILLINGTEST,
} from "./actions";

const initialState = [];

export const FillingTestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === SET_FILLINGTEST) {
    return payload;
  }

  if (type === SEND_FILLINGTEST) {
    return {};
  }

  if (type === REMOVE_FILLINGTEST) {
    return {};
  }

  return state;
};
