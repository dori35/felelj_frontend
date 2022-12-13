import { Card, Container } from "react-bootstrap";

export function Started() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>A teszt már elkezdődött!</Card.Title>
                <Card.Text>Sajnos már nem tudsz csatlakozni.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
