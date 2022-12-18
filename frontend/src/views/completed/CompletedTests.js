import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getCompletedTests } from "../../state/completedTests/selectors";
import { CompletedTest } from "./CompletedTest";
import Table from "react-bootstrap/Table";

export function CompletedTests() {
  const completedTests = useSelector(getCompletedTests);
  return (
    <>
      {completedTests.length >= 0 && (
        <div className="table-responsive mx-md-5  mt-md-3">
          <Table className="table-sm">
            <thead className="bg-dark text-white">
              <tr>
                <th>Cím</th>
                <th>Tárgy</th>
                <th>Kitöltés dátuma</th>
                <th>Időkeret</th>
                <th>Pont (Kapott/ Össz)</th>
                <th>Kérdések száma</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {completedTests.map((completedTest, index) => (
                <CompletedTest key={index} completedTest={completedTest} />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
