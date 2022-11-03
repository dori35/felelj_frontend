import { authApi } from "../../api/authApi";
import { getToken, getUserId } from "./selectors";

export const STORE_USER = "STORE_USER";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

// Sync
export const storeUser = (authData) => ({
  type: STORE_USER,
  payload: authData,
});

export const addNewUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
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

export const logout = () => (dispatch) => {
  authApi.logout();
  dispatch(removeUser());
};

export const restoreUser = () => async (dispatch) => {
  const token = authApi.getToken();
  if (token) {
    const data = JSON.parse(atob(token.split(".")[1]));
    const userIdentifier = data.sub;
    const user = await authApi.getUserByIdentifier(userIdentifier, token);
    dispatch(
      storeUser({
        ...user,
        token,
        type: "Bearer",
      })
    );
  }
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
