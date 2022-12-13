import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreatedTests } from "../state/createdTests/actions";
import { useEffect, useState } from "react";
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
import { fetchCompletedTests } from "../state/completedTests/actions";
import { TestStart } from "./start/TestStart";
import { Start } from "./start/Start";

export function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [loaded, setLoaded] = useState(false);
  const hasToken = window.sessionStorage.getItem("token") ? true : false;
  const dispatch = useDispatch();

  useEffect(() => {
    const restore = async () => {
      try {
        if (hasToken) {
          await dispatch(restoreUser());
        } else {
          setLoaded(true);
        }
      } catch (error) {
        setLoaded(true);
      }
    };
    restore();
  }, [dispatch, hasToken]);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (isLoggedIn) {
          await dispatch(fetchCreatedTests());
          await dispatch(fetchCompletedTests());
          setLoaded(true);
        }
      } catch (error) {}
    };
    fetch();
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {loaded && (
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
                <Route exact path="/createdtests" element={<CreatedTests />} />
              )}
              {isLoggedIn && (
                <Route
                  path="/results/:createdTestId"
                  element={<CompletedTests />}
                />
              )}
              {isLoggedIn && (
                <Route
                  path="/startTest/:createdTestId"
                  element={<FillingTest />}
                />
              )}
              {isLoggedIn && (
                <Route
                  exact
                  path="/createdtests/:createdTestId"
                  element={<ModifyCreatedTest />}
                />
              )}
              {isLoggedIn && (
                <Route path="/s/:createdTestId" element={<TestStart />} />
              )}
              <Route path="/start/:url" element={<Start />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}
