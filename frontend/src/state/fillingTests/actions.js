import { fillingTestApi } from "../../api/fillingTestApi";
import { fetchCompletedTests } from "../completedTests/actions";
import { addToken, addUserId } from "../utils/utils";

export const SET_FILLINGTEST = "SET_FILLINGTEST";
export const SEND_FILLINGTEST = "SEND_FILLINGTEST";
export const REMOVE_FILLINGTEST = "REMOVE_FILLINGTEST";

export const setFillingTest = (test) => ({
  type: SET_FILLINGTEST,
  payload: test,
});

export const sendTest = () => ({
  type: SEND_FILLINGTEST,
});

export const removeFillingTest = () => ({
  type: REMOVE_FILLINGTEST,
});

export const fetchFillingTest = (testId) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      try {
        let test = await fillingTestApi.get(token, testId, userId);
        dispatch(setFillingTest(test));
      } catch (error) {}
    })
  );

export const sendFillingTest = (testId, answers, startDate) =>
  addToken(
    addUserId(async (dispatch, getState, _, token, userId) => {
      try {
        await fillingTestApi.send(token, testId, userId, answers, startDate);
      } catch (error) {}
      dispatch(sendTest());
      dispatch(fetchCompletedTests());
    })
  );
