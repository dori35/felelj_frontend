import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createdTestsReducer } from "./createdTests/reducer";
import { authReducer } from "./auth/reducer";
import { profileReducer } from "./profile/reducer";

const rootReducer = combineReducers({
  tests: createdTestsReducer,
  auth: authReducer,
  profile: profileReducer,
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
