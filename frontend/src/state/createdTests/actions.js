import { createdTestsApi } from "../../api/rest";

export const SET_CREATEDTESTS = "SET_CREATEDTESTS";
export const ADD_TEST = "ADD_TEST";
export const UPDATE_TEST = "UPDATE_TEST";

// Sync
export const setCreatedTests = (tests) => ({
  type: SET_CREATEDTESTS,
  payload: tests,
});

// Async
export const fetchCreatedTests = () => async (dispatch) => {
  const tests = await createdTestsApi.getAll();
  dispatch(setCreatedTests(tests));
};
