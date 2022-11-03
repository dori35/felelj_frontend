import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export function CompletedTests() {
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
              <th>Pont (Kapott/ Össz)</th>
              <th>Kérdések száma</th>
            </tr>
          </thead>
          <tbody className="bg-light"></tbody>
        </Table>
      </Container>
    </>
  );
}
