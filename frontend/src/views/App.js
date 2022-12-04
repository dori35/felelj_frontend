import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedTests } from "../state/createdTests/actions";
import { useEffect } from "react";
import { Layout } from "./layout/Layout";
import { getIsLoggedIn } from "../state/auth/selectors";
import { Login } from "./auth/Login";
import { restoreUser } from "../state/auth/actions";
import { LandingPage } from "./landingPage/LandingPage";
import { Registration } from "./auth/Registration";
import { CompletedTests } from "./completed/CompletedTests";
import { ModifyCreatedTest } from "./modify/ModifyCreatedTest";
import { CreatedTests } from "./created/CreatedTests";
import { NewTest } from "./new/NewTest";
import { FillingTest } from "./filling/FillingTest";
import { TestStart } from "./TestStart";

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCreatedTests());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {isLoggedIn && <Route path="/createTest" element={<NewTest />} />}
          {isLoggedIn && (
            <Route path="/completedtests" element={<CompletedTests />} />
          )}
          {isLoggedIn && (
            <Route path="/createdtests" element={<CreatedTests />} />
          )}{" "}
          {isLoggedIn && (
            <Route path="/startTest/:createdTestId" element={<FillingTest />} />
          )}
          {isLoggedIn && (
            <Route
              exact
              path="/createdtests/:createdTestId"
              element={<ModifyCreatedTest />}
            />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
