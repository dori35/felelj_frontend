import { Card, Container } from "react-bootstrap";

export function Late() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Card.Title>A teszt lezárult!</Card.Title>
                <Card.Text>Sajnos már véget ért a teszt írása.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
