import { getToken, getUserId } from "../auth/selectors";

export const addToken =
  (fn) =>
  (dispatch, getState, ...rest) => {
    const token = getToken(getState());
    fn(dispatch, getState, ...rest, token);
  };

export const addUserId =
  (fn) =>
  (dispatch, getState, ...rest) => {
    const userId = getUserId(getState());
    fn(dispatch, getState, ...rest, userId);
  };

export const shuffle = (arr) => {
  let current = arr.length,
    random;

  while (current !== 0) {
    random = Math.floor(Math.random() * current);
    current--;

    [arr[current], arr[random]] = [arr[random], arr[current]];
  }

  return arr;
};
