import { createdTestsApi } from "../../api/createdTestsApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_CREATEDTESTS = "SET_CREATEDTESTS";
export const ADD_TEST = "ADD_TEST";
export const UPDATE_TESTS = "UPDATE_TESTS";
export const REMOVE_TESTS = "REMOVE_TESTS";

export const setCreatedTests = (tests) => ({
  type: SET_CREATEDTESTS,
  payload: tests,
});

export const updateTests = (tests) => ({
  type: UPDATE_TESTS,
  payload: tests,
});

export const removeTests = () => ({
  type: REMOVE_TESTS,
});

export const fetchCreatedTests = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      try {
        let tests = await createdTestsApi.getAll(token, userId);
        dispatch(setCreatedTests(tests));
      } catch (error) {
        console.log("error a createdtestnel");
      }
    })
  );

export const modifyTest = (testId, title, subject, random, tasks) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await createdTestsApi.modifyTest(
        token,
        userId,
        testId,
        title,
        subject,
        random,
        tasks
      );
      let tests = await createdTestsApi.getAll(token, userId);
      dispatch(updateTests(tests));
    })
  );

export const newTest = (title, subject, random, tasks) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await createdTestsApi.newTest(
        token,
        userId,
        title,
        subject,
        random,
        tasks
      );
      let tests = await createdTestsApi.getAll(token, userId);
      dispatch(updateTests(tests));
    })
  );

export const deleteTest = (test) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await createdTestsApi.deleteTest(token, userId, test.id);
      let tests = await createdTestsApi.getAll(token, userId);
      dispatch(updateTests(tests));
    })
  );
