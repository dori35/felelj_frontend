import { createdTestsApi } from "../../api/restApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_CREATEDTESTS = "SET_CREATEDTESTS";
export const ADD_TEST = "ADD_TEST";
export const UPDATE_TEST = "UPDATE_TEST";

// Sync
export const setCreatedTests = (tests) => ({
  type: SET_CREATEDTESTS,
  payload: tests,
});

// Async
export const fetchCreatedTests = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      const tests = await createdTestsApi.getAll(token, userId);
      dispatch(setCreatedTests(tests));
    })
  );
