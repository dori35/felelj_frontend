import { Card, Container } from "react-bootstrap";

export function Early() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>A teszt még nem kezdődött el!</Card.Title>
                <Card.Text>Várj vagy gyere vissza később.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
