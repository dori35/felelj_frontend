import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { CreatedTest } from "./CreatedTest";
export function CreatedTests() {
  const createdTests = useSelector(getCreatedTests);

  return (
    <>
      <br />
      <div className="container my-5">
        <Table>
          <thead className="bg-dark text-white">
            <tr>
              <th>Cím</th>
              <th>Tárgy</th>
              <th>Időkeret</th>
              <th>Létrehozva</th>
              <th>Pont</th>
              <th>Kérdések száma</th>
              <th>Sorrendben</th>
              <th>Művelet</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {createdTests.map((createdTest) => (
              <CreatedTest key={createdTest.id} createdTest={createdTest} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
