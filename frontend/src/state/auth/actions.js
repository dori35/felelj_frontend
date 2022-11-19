import { authApi } from "../../api/authApi";
import { addToken, addUserId } from "../utils/utils";

export const STORE_USER = "STORE_USER";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SET_PROFILE = "SET_PROFILE";

// Sync
export const storeUser = (authData) => ({
  type: STORE_USER,
  payload: authData,
});

/*export const addNewUser = (user) => ({
  type: ADD_USER,
  payload: user,
});*/

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
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
    const response = await authApi.signup(
      name,
      password,
      identifier,
      email,
      role
    );
    return response;
    // dispatch(addNewUser(user));
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

export const fetchProfile = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      const profile = await authApi.getUserById(userId, token);
      dispatch(setProfile({ profile: profile }));
    })
  );
