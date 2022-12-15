import { fillingTestApi } from "../../api/fillingTestApi";
import { fetchCompletedTests } from "../completedTests/actions";
import { addToken, addUserId } from "../utils/utils";

export const SET_FILLINGTEST = "SET_FILLINGTEST";
export const SEND_FILLINGTEST = "SEND_FILLINGTEST";

export const setFillingTest = (test) => ({
  type: SET_FILLINGTEST,
  payload: test,
});

export const sendTest = () => ({
  type: SEND_FILLINGTEST,
});

export const fetchFillingTest = (testId) =>
  addToken(async (dispatch, getState, _, token) => {
    let test = await fillingTestApi.get(token, testId);
    dispatch(setFillingTest(test));
  });

export const sendFillingTest = (testId, answers, startDate) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      await fillingTestApi.send(token, testId, userId, answers, startDate);
      dispatch(sendTest());
      dispatch(fetchCompletedTests());
    })
  );
