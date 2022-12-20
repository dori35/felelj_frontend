import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTestResults } from "../../state/testResults/selectros";
import { TestFiller } from "./TestFiller";
export function TestResultFillers() {
  const { Index } = useParams();
  const results = useSelector(getTestResults);

  const fillers = results[Index].fillers;
  return (
    <>
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
              <TestFiller key={index} filler={filler} index={Index} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
