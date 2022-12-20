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
import { TestResults } from "./results/TestResults";
import { SettingStartTest } from "./settingStartTest/SettingStartTest";
import { Start } from "./start/Start";
import { Finish } from "./start/Finish";
import { CompletedTestResults } from "./completed/CompletedTestResults";
import { TestResultFillers } from "./results/TestResultFillers";
import { TestFillerTask } from "./results/TestFillerTasks";

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
              {isLoggedIn && <Route path="/newtest" element={<NewTest />} />}
              {isLoggedIn && (
                <Route path="/completedtests" element={<CompletedTests />} />
              )}{" "}
              {isLoggedIn && (
                <Route
                  path="/completedtests/:completedTestId/:Index"
                  element={<CompletedTestResults />}
                />
              )}
              {isLoggedIn && (
                <Route exact path="/createdtests" element={<CreatedTests />} />
              )}
              {isLoggedIn && (
                <Route
                  exact
                  path="/modifytest/:createdTestId"
                  element={<ModifyCreatedTest />}
                />
              )}
              {isLoggedIn && (
                <Route
                  path="/results/:createdTestId"
                  element={<TestResults />}
                />
              )}
              {isLoggedIn && (
                <Route
                  path="/results/fillers/:Index"
                  element={<TestResultFillers />}
                />
              )}{" "}
              {isLoggedIn && (
                <Route
                  path="/results/fillers/:Index/:fillerId"
                  element={<TestFillerTask />}
                />
              )}
              {isLoggedIn && (
                <Route
                  path="/trytest/:createdTestId"
                  element={<FillingTest />}
                />
              )}
              {isLoggedIn && (
                <Route
                  path="/settingstart/:createdTestId"
                  element={<SettingStartTest />}
                />
              )}
              <Route path="/start/:url" element={<Start />} />
              {isLoggedIn && (
                <Route path="/start/results/:url" element={<Finish />} />
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}
