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

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
