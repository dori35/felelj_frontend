import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { BsFillTrashFill, BsPencilFill, BsTrophy } from "react-icons/bs";
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
            {createdTests.map((createdTest, number) => (
              <tr key={number}>
                <td>{createdTest.title}</td>
                <td>{createdTest.subject}</td>
                <td>1 perc 20 mp</td>
                <td>{createdTest.time}</td>
                <td>22 pont</td>
                <td>{10}</td>
                <td>{createdTest.random ? "igen" : "nem"}</td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm">
                    <BsFillTrashFill />
                  </button>
                  <button type="button" class="btn btn-primary btn-sm">
                    <BsPencilFill />
                  </button>
                  <button type="button" class="btn btn-warning btn-sm">
                    <BsTrophy />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
