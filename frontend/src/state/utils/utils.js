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
