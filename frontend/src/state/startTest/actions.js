import { startApi } from "../../api/startApi";
import { addToken, addUserId } from "../utils/utils";

export const SETTING_STARTTEST = "SETTING_STARTTEST";
export const SET_STARTTEST = "SET_STARTTEST";

export const settingStartTest = () => ({
  type: SETTING_STARTTEST,
});

export const setTest = (test) => ({
  type: SET_STARTTEST,
  payload: test,
});

export const settingStart = (testId, url, startTime) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await startApi.settingStartTest(token, testId, userId, url, startTime);
      dispatch(settingStartTest());
    })
  );

export const fetchStartTest = (url) =>
  addToken(async (dispatch, getState, _, token) => {
    let test = await startApi.get(token, url);
    dispatch(setTest(test));
  });
