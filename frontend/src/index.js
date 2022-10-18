import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./views/App";

import { configureStore } from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
