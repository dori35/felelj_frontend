import { useEffect } from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";
import { getTestResults } from "../../state/testResults/selectros";
import { TestResult } from "./TestResult";

export function TestResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdTestId } = useParams();
  useEffect(() => {
    dispatch(fetchTestResults(createdTestId));
  }, [dispatch, createdTestId]);
  const results = useSelector(getTestResults);

  return (
    <>
      {results && !results.error && results.length >= 0 ? (
        <div className=" table-responsive mx-md-5 mt-md-3  ">
          <Table className="table-sm " style={{ textAlign: "center" }}>
            <thead className="bg-dark text-white">
              <tr>
                <th>Teszt időpontja</th>
                <th>Cím</th>
                <th>Tantárgy</th>
                <th>Random sorrend</th>
                <th>Időkeret</th>
                <th>Kérdések száma</th>
                <th>Össz. pont</th>
                <th>Átlag pont</th>
                <th>Legtöbb pont</th>
                <th>Legkevesebb pont</th>
                <th>Kitöltők száma</th>
                <th>Művelet</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {results.map((result, index) => (
                <TestResult
                  key={index}
                  result={result}
                  index={index}
                  testId={createdTestId}
                />
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Container className="py-5">
          <div>
            <Card className=" bg-dark text-light">
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase text-danger">
                  A teszthez nem tartozik kitöltés.
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>
      )}
    </>
  );
}
