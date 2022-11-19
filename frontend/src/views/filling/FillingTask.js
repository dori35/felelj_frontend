import { Card, Container, Form } from "react-bootstrap";
export function FillingTask({ task }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <Card className="bg-light text-dark" style={{ borderRadius: "1rem" }}>
            <Card.Body className="text-center">
              <div className="pb-5 mb-md-5 mt-md-4">
                <Card.Title className="fw-bold text-uppercase">
                  {task.text}
                </Card.Title>
                <Form.Group controlId="formGroup01" className="pb-3">
                  <Form.Label>task.point</Form.Label>
                </Form.Group>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
