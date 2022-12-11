import { completedTestsApi } from "../../api/restApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_COMPLETEDTESTS = "SET_COMPLETEDTESTS";

// Sync
export const setCompletedTests = (tests) => ({
  type: SET_COMPLETEDTESTS,
  payload: tests,
});

// Async
export const fetchCompletedTests = () =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      let tests = await completedTestsApi.getAll(token, userId);
      dispatch(setCompletedTests(tests));
    })
  );
