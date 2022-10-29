import { CreatedTests } from "./createdTests/CreatedTests";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedTests } from "../state/createdTests/actions";
import { useEffect } from "react";
import { Layout } from "./layout/Layout";
import { LandingPage } from "./landingPage/LandingPage";
import { Registration } from "./auth/Registration ";
import { getIsLoggedIn } from "../state/auth/selectors";
import { Login } from "./auth/Login";
import { CompletedTests } from "./completedTests/CompletedTests";

export function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCreatedTests());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          {isLoggedIn && <Route path="/mytests" element={<CreatedTests />} />}
          {<Route path="/completedtests" element={<CompletedTests />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
