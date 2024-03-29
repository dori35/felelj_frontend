import { useSelector } from "react-redux";
import { getCompletedTests } from "../../state/completedTests/selectors";
import { CompletedTest } from "./CompletedTest";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function CompletedTests() {
  const completedTests = useSelector(getCompletedTests);
  const navigate = useNavigate();
  useEffect(() => {
    if (!!completedTests && !!completedTests.error) {
      navigate("/");
    }
  }, [completedTests]);
  return (
    <>
      {!!completedTests &&
        !completedTests.error &&
        completedTests.length >= 0 && (
          <div className="table-responsive mx-md-5  mt-md-3">
            <Table className="table-sm" style={{ textAlign: "center" }}>
              <thead className="bg-dark text-white">
                <tr>
                  <th>Cím</th>
                  <th>Tantárgy</th>
                  <th>Beküldés időpontja</th>
                  <th>Időkeret</th>
                  <th>Pont (Kapott/ Össz)</th>
                  <th>Kérdések száma</th>
                  <th>Művelet</th>
                </tr>
              </thead>
              <tbody className="bg-light">
                {completedTests.map((completedTest, index) => (
                  <CompletedTest
                    key={index}
                    completedTest={completedTest}
                    index={index}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        )}
    </>
  );
}
