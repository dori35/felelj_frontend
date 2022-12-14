import { testResultsApi } from "../../api/testResultsApi";
import { addToken, addUserId } from "../utils/utils";

export const SET_TESTRESULTS = "SET_TESTRESULTS";

export const setTestResults = (results) => ({
  type: SET_TESTRESULTS,
  payload: results,
});

export const fetchTestResults = (testId) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      let results = await testResultsApi.getAll(token, testId, userId);
      dispatch(setTestResults(results));
    })
  );
