import { CreatedTests } from "./createdTests/CreatedTests";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCreatedTests } from "../state/createdTests/actions";
import { useEffect } from "react";
import { Layout } from "./layout/Layout";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreatedTests());
  }, [dispatch]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<CreatedTests />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
