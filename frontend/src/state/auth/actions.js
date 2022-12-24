import { authApi } from "../../api/authApi";
import { removeCompletedTests } from "../completedTests/actions";
import { removeTests } from "../createdTests/actions";
import { removeFillingTest } from "../fillingTests/actions";
import { removeStartTest } from "../startTest/actions";
import { removeTestResults } from "../testResults/actions";
import { addToken, addUserId } from "../utils/utils";

export const STORE_USER = "STORE_USER";
export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SET_PROFILE = "SET_PROFILE";

export const storeUser = (authData) => ({
  type: STORE_USER,
  payload: authData,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const login = (identifier, password) => async (dispatch) => {
  const response = await authApi.login(identifier, password);
  if (!response.error) {
    dispatch(storeUser(response));
  } else {
    throw new Error("Authentication");
  }
  return response;
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
  };

export const logout = () => (dispatch) => {
  authApi.logout();
  dispatch(removeUser());
  dispatch(removeTests());
  dispatch(removeCompletedTests());
  dispatch(removeFillingTest());
  dispatch(removeStartTest());
  dispatch(removeTestResults());
};

export const restoreUser = () => async (dispatch) => {
  const token = authApi.getToken();
  if (token) {
    const data = JSON.parse(atob(token.split(".")[1]));
    const userIdentifier = data.sub;
    const user = await authApi.getUserByIdentifier(userIdentifier, token);
    if (!user.error) {
      dispatch(
        storeUser({
          ...user,
          token,
          type: "Bearer",
        })
      );
    }
  }
};

export const fetchProfile = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      const profile = await authApi.getUserById(userId, token);
      if (!profile.error) {
        dispatch(setProfile({ profile: profile }));
      }
    })
  );
