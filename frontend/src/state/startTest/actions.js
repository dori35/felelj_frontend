import { startApi } from "../../api/startApi";
import { addToken, addUserId } from "../utils/utils";

export const START_TEST = "START_TEST";
export const SET_STARTTEST = "SET_STARTTEST";

export const startTest = () => ({
  type: START_TEST,
});

export const setTest = (test) => ({
  type: SET_STARTTEST,
  payload: test,
});

export const startTheTest = (testId, url, startTime) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await startApi.setStart(token, testId, userId, url, startTime);
      dispatch(startTest());
    })
  );

export const fetchStartTest = (url) =>
  addToken(async (dispatch, getState, _, token) => {
    let test = await startApi.get(token, url);
    dispatch(setTest(test));
  });
