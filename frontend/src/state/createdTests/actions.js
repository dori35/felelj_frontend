import { createdTestsApi } from "../../api/createdTestApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_CREATEDTESTS = "SET_CREATEDTESTS";
export const ADD_TEST = "ADD_TEST";
export const UPDATE_TESTS = "UPDATE_TESTS";

// Sync
export const setCreatedTests = (tests) => ({
  type: SET_CREATEDTESTS,
  payload: tests,
});

export const updateTests = (tests) => ({
  type: UPDATE_TESTS,
  payload: tests,
});

// Async
export const fetchCreatedTests = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      let tests = await createdTestsApi.getAll(token, userId);
      dispatch(setCreatedTests(tests));
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
