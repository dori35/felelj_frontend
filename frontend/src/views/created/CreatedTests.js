import { useDispatch, useSelector } from "react-redux";
import { deleteTest } from "../../state/createdTests/actions";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { CreatedTest } from "./CreatedTest";
import Table from "react-bootstrap/Table";

export function CreatedTests() {
  const createdTests = useSelector(getCreatedTests);
  const dispatch = useDispatch();
  const handleDeleteTestClick = (test) => {
    dispatch(deleteTest(test));
  };

  return (
    <>
      {createdTests && createdTests.length >= 0 && (
        <div className="table-responsive mx-md-5 mt-md-3">
          <Table className="table-sm " style={{ textAlign: "center" }}>
            <thead className="bg-dark text-white">
              <tr>
                <th>Cím</th>
                <th>Tárgy</th>
                <th>Időkeret</th>
                <th>Létrehozva</th>
                <th>Pont</th>
                <th>Kérdések száma</th>
                <th>Random sorrend</th>
                <th>Művelet</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {createdTests.map((createdTest) => (
                <CreatedTest
                  key={createdTest.id}
                  createdTest={createdTest}
                  onDeleteTestClick={() => handleDeleteTestClick(createdTest)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}
