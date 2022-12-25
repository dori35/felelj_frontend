import { Card, Container } from "react-bootstrap";

export function FillingNotFound() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>Nincs ilyen teszt!</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
