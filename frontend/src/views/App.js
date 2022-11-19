import { CreatedTests } from "./createdTests/CreatedTests";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedTests } from "../state/createdTests/actions";
import { useEffect } from "react";
import { Layout } from "./layout/Layout";
import { Registration } from "./auth/Registration ";
import { getIsLoggedIn } from "../state/auth/selectors";
import { Login } from "./auth/Login";
import { CompletedTests } from "./completedTests/CompletedTests";
import { restoreUser } from "../state/auth/actions";
import { LandingPage } from "./landingPage/LandingPage";
import { ModifyCreatedTest } from "./modifyCreatedTest/ModifyCreatedTest";
import Test from "./auth/test";
import { FormikRegistration } from "./auth/FormikRegistration";

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
          {isLoggedIn && (
            <Route path="/completedtests" element={<CompletedTests />} />
          )}
          {isLoggedIn && (
            <Route path="/createdtests" element={<CreatedTests />} />
          )}
          {isLoggedIn && (
            <Route
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
