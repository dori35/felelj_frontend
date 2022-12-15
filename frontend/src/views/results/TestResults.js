import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";
import { getTestResults } from "../../state/testResults/selectros";
import { TestResult } from "./TestResult";

export function TestResults() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  useEffect(() => {
    dispatch(fetchTestResults(createdTestId));
  }, [dispatch, createdTestId]);
  const results = useSelector(getTestResults);
  /* <>
      {" "}
      {results &&
        results.map((result, index) => <p key={index}>{result.fillDate}</p>)}
    </>*/
  return (
    <>
      {results && results.length >= 0 && (
        <Container className="my-5">
          <Table>
            <thead className="bg-dark text-white">
              <tr>
                <th>Kitöltés dátuma</th>
                <th>Cím</th>
                <th>Tárgy</th>
                <th>Random sorrend</th>
                <th>Időkeret</th>
                <th>Kérdések száma</th>
                <th>Össz pont</th>
                <th>Átlag pont</th>
                <th>Legtöbb pont</th>
                <th>Legkevesebb pont</th>
                <th>Kitöltők száma</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {results.map((result, index) => (
                <TestResult key={index} result={result} />
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
}
