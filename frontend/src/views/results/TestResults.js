import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";
import { CompletedTest } from "./CompletedTest";
export function TestResults() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  useEffect(() => {
    dispatch(fetchTestResults(createdTestId));
  }, [dispatch, createdTestId]);

  const results = useSelector(getTestResults);
  return (
    <>
      {results.map((result, index) => (
        <p>{result.fillDate}</p>
      ))}
    </>
  );
}
