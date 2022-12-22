import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";
import { getTestResults } from "../../state/testResults/selectros";
import { TestResultFiller } from "./TestResultFiller";

export function TestResultFillers() {
  const { Index } = useParams();
  const { createdTestId } = useParams();
  const dispatch = useDispatch();
  const results = useSelector(getTestResults);

  useEffect(() => {
    if (!results || results.length === 0) {
      dispatch(fetchTestResults(createdTestId));
    }
  }, [dispatch, createdTestId]);

  const [fillers, setFillers] = useState([]);

  useEffect(() => {
    if (results !== null && results.length > 0) {
      setFillers(results[Index].fillers);
    }
  }, [results]);

  return (
    <>
      {fillers.length > 0 && (
        <div className="table-responsive mx-md-5 mt-md-3">
          <Table className="table-sm " style={{ textAlign: "center" }}>
            <thead className="bg-dark text-white">
              <tr>
                <th>Neptun-kód</th>
                <th>Elért pontszám</th>
                <th>Művelet</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {fillers.map((filler, index) => (
                <TestResultFiller
                  key={index}
                  filler={filler}
                  index={Index}
                  createdTestId={createdTestId}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
