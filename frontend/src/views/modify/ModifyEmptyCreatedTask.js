import { useState } from "react";
import { Card, Col, Container, Form, FormText, Row } from "react-bootstrap";
import { ModifyCreatedChoices } from "./ModifyCreatedChoices";

export function ModifyEmptyCreatedTask({ task }) {
  const [type, setType] = useState(task.answerType);
  const handleChange = (e) => {
    if (e.target.value === "ONE_CHOICE") {
      setType("ONE_CHOICE");
    } else if (e.target.value === "MULTIPLE_CHOICES") {
      setType("MULTIPLE_CHOICES");
    } else if (e.target.value === "TRUE_FALSE") {
      setType("TRUE_FALSE");
    } else if (e.target.value === "ORDER_LIST") {
      setType("ORDER_LIST");
    }
  };
  return (
    <div>
      <Container className="py-3">
        <div>
          <Card className="bg-light text-dark">
            <Card.Body>
              <Row>
                <Form.Label column="lg" lg={2}>
                  Feladat szövege:
                </Form.Label>
                <Col>
                  <Form.Control size="lg" type="text" placeholder={task.text} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="lg" lg={2}>
                  Pontszám:
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="number"
                    min="1"
                    placeholder={task.point}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="lg" lg={2}>
                  Időkeret:
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="number"
                    min="10"
                    max="500"
                    placeholder={task.timeFrame + " másodperc"}
                  />
                </Col>
              </Row>
              <br />
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="role">
                  <Form.Label>Típus: </Form.Label>{" "}
                  <Form.Check
                    label="egy jó válasz"
                    name={`type-${task.id}`}
                    type="radio"
                    value="ONE_CHOICE"
                    id="ONE_CHOICE"
                    defaultChecked={task.answerType === "ONE_CHOICE"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="több jó válasz"
                    name={`type-${task.id}`}
                    type="radio"
                    value="MULTIPLE_CHOICES"
                    id="MULTIPLE_CHOICES"
                    defaultChecked={task.answerType === "MULTIPLE_CHOICES"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="igaz vagy hamis"
                    name={`type-${task.id}`}
                    type="radio"
                    value="TRUE_FALSE"
                    id="TRUE_FALSE"
                    defaultChecked={task.answerType === "TRUE_FALSE"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="sorba rendezés"
                    name={`type-${task.id}`}
                    type="radio"
                    value="ORDER_LIST"
                    id="ORDER_LIST"
                    defaultChecked={task.answerType === "ORDER_LIST"}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Row>
              <ModifyCreatedChoices choices={task.choices} type={type} />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
