import { Card, Container } from "react-bootstrap";

export function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>Nincs ilyen teszt!</Card.Title>
                <Card.Text>
                  Lehet hibás az URL vagy még nincs beállítva a hozzá tartozó
                  teszt!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
