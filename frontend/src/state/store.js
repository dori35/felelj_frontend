import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createdTestsReducer } from "./createdTests/reducer";
import { authReducer } from "./auth/reducer";
import { FillingTestReducer } from "./fillingTests/reducer";
import { completedTestsReducer } from "./completedTests/reducer";
import { TestResultsReducer } from "./testResults/reducer";
import { StartTestReducer } from "./startTest/reducer";

const rootReducer = combineReducers({
  tests: createdTestsReducer,
  auth: authReducer,
  fillingTest: FillingTestReducer,
  startTest: StartTestReducer,
  completedTests: completedTestsReducer,
  results: TestResultsReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
};
