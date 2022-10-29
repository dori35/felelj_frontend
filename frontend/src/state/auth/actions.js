import { authApi } from "../../api/authApi";
import { getToken, getUserId } from "./selectors";

export const STORE_USER = "STORE_USER";
export const ADD_USER = "ADD_USER";

// Sync
export const storeUser = (authData) => ({
  type: STORE_USER,
  payload: authData,
});

export const addNewUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

// Async
export const login = (identifier, password) => async (dispatch) => {
  const response = await authApi.login(identifier, password);
  if (response.error) {
    throw new Error("Authentication failed!");
  }
  dispatch(storeUser(response));
};

export const signup =
  (name, password, identifier, email, role) => async (dispatch) => {
    const user = await authApi.signup(name, password, identifier, email, role);
    dispatch(addNewUser(user));
  };

// Util
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
