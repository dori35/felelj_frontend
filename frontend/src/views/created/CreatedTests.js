import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../../state/auth/selectors";
import { deleteTest } from "../../state/createdTests/actions";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { CreatedTest } from "./CreatedTest";
export function CreatedTests() {
  const createdTests = useSelector(getCreatedTests);
  const dispatch = useDispatch();
  const handleDeleteTestClick = (test) => {
    dispatch(deleteTest(test));
  };

  const handleStartTestClick = (test) => {};
  return (
    <>
      <br />
      <Container className="my-5">
        <Table>
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
                onStartTestClick={() => handleStartTestClick(createdTest)}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
