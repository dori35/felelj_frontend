import { useDispatch, useSelector } from "react-redux";
import { deleteTest } from "../../state/createdTests/actions";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { CreatedTest } from "./CreatedTest";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRoles } from "../../state/auth/selectors";

export function CreatedTests() {
  const createdTests = useSelector(getCreatedTests);
  const roles = useSelector(getRoles);
  const navigate = useNavigate();
  useEffect(() => {
    if (!!createdTests && createdTests.error) {
      navigate("/");
    }
    if (!roles.includes("TEACHER")) {
      navigate("/");
    }
  }, [createdTests]);
  const dispatch = useDispatch();
  const handleDeleteTestClick = (test) => {
    dispatch(deleteTest(test));
  };
  return (
    <>
      {!!createdTests && !createdTests.error && createdTests.length >= 0 && (
        <div className="table-responsive mx-md-5 mt-md-3">
          <Table className="table-sm " style={{ textAlign: "center" }}>
            <thead className="bg-dark text-white">
              <tr>
                <th>Cím</th>
                <th>Tantárgy</th>
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
