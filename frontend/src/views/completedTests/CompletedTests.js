import Table from "react-bootstrap/Table";
export function CompletedTests() {
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
              <th>Pont (Kapott/ Össz)</th>
              <th>Kérdések száma</th>
            </tr>
          </thead>
          <tbody className="bg-light"></tbody>
        </Table>
      </div>
    </>
  );
}
