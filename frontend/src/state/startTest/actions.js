import { startApi } from "../../api/startApi";
import { addToken, addUserId } from "../utils/utils";

export const SETTING_STARTTEST = "SETTING_STARTTEST";
export const SET_STARTTEST = "SET_STARTTEST";
export const SET_RESULTS = "SET_RESULTS";
export const REMOVE_STARTTEST = "REMOVE_STARTTEST";

export const settingStartTest = () => ({
  type: SETTING_STARTTEST,
});

export const setTest = (test) => ({
  type: SET_STARTTEST,
  payload: test,
});

export const setResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});

export const removeStartTest = () => ({
  type: REMOVE_STARTTEST,
});

export const settingStart = (testId, url, startTime) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      try {
        await startApi.settingStartTest(token, testId, userId, url, startTime);
        dispatch(settingStartTest());
      } catch (error) {
        console.log("sajttttt");
      }
    })
  );

export const fetchStartTest = (url) =>
  addToken(async (dispatch, getState, _, token) => {
    try {
      let test = await startApi.getStartTest(token, url);
      dispatch(setTest(test));
    } catch (error) {
      console.log("alma");
    }
  });

export const fetchResults = (url, userId) =>
  addToken(async (dispatch, getState, _, token) => {
    let results = await startApi.getResults(token, url, userId);
    dispatch(setResults(results));
  });
