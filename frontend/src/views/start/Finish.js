import { Card, Container } from "react-bootstrap";

export function Finish() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>Végeee!</Card.Title>
                <Card.Text>Sajnos már véget ért a teszt írása.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
