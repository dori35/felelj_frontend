import { completedTestsApi } from "../../api/completedTestsApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_COMPLETEDTESTS = "SET_COMPLETEDTESTS";

export const setCompletedTests = (tests) => ({
  type: SET_COMPLETEDTESTS,
  payload: tests,
});

export const fetchCompletedTests = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      let tests = await completedTestsApi.getAll(token, userId);
      dispatch(setCompletedTests(tests));
    })
  );
