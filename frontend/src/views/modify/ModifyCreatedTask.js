import { useState } from "react";
import { Card, CloseButton, Col, Container, Form, Row } from "react-bootstrap";
import { ModifyCreatedChoices } from "./ModifyCreatedChoices";

export function ModifyCreatedTask({
  task,
  modifyTask,
  index,
  handleTaskCloseButtonClick,
}) {
  const [taskType, setTaskType] = useState(task.taskType);
  const [point, setPoint] = useState(task.point);
  const [timeFrame, setTimeFrame] = useState(task.timeFrame);
  const [text, setText] = useState(task.text);

  const handleChange = (e) => {
    if (task.solution !== "") {
      modifyTask({ solution: "" });
    }
    if (!!task.solutionTrueFalse && task.solutionTrueFalse !== "") {
      modifyTask({ solutionTrueFalse: "" });
    }
    if (!!task.solutionOneChoice && task.solutionOneChoice !== "") {
      modifyTask({ solutionOneChoice: "" });
    }
    if (!!task.solutionMultipleChoices && task.solutionMultipleChoices !== "") {
      modifyTask({ solutionMultipleChoices: "" });
    }
    if (e.target.value === "ONE_CHOICE") {
      setTaskType("ONE_CHOICE");
      modifyTask({ taskType: "ONE_CHOICE" });
    } else if (e.target.value === "MULTIPLE_CHOICES") {
      setTaskType("MULTIPLE_CHOICES");
      modifyTask({ taskType: "MULTIPLE_CHOICES" });
    } else if (e.target.value === "TRUE_FALSE") {
      setTaskType("TRUE_FALSE");
      modifyTask({ taskType: "TRUE_FALSE" });
      modifyTask({ choices: [] });
    } else if (e.target.value === "ORDER_LIST") {
      setTaskType("ORDER_LIST");
      modifyTask({ taskType: "ORDER_LIST" });
      modifyTask({ choices: [] });
    }
  };

  return (
    <div>
      <Container className="py-3">
        <div>
          <Card className="bg-light text-dark">
            <Card.Body>
              <CloseButton
                onClick={handleTaskCloseButtonClick}
                style={{ align: "right", float: "right", display: "block" }}
              />
              <br />
              <br />
              <Row>
                <Form.Label column="lg" lg={2}>
                  Feladat szövege:
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="text"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      modifyTask({ text: e.target.value });
                    }}
                    required
                    isInvalid={text.length <= 0}
                    isValid={text.length > 0}
                  />
                  <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
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
                    value={point}
                    onChange={(e) => {
                      setPoint(e.target.value);
                      modifyTask({ point: e.target.value });
                    }}
                    required
                    isInvalid={
                      !point ||
                      !Number.isInteger(Number(point)) ||
                      point < 1 ||
                      point > 100
                    }
                    isValid={
                      !!point &&
                      Number.isInteger(Number(point)) &&
                      point >= 1 &&
                      point <= 100
                    }
                  />
                  <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    1 és 100 közötti egész szám legyen!
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="lg" lg={2}>
                  Időkeret (másodperc):
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="number"
                    min="5"
                    max="20"
                    value={timeFrame}
                    onChange={(e) => {
                      setTimeFrame(e.target.value);
                      modifyTask({ timeFrame: e.target.value });
                    }}
                    required
                    isInvalid={
                      !timeFrame ||
                      !Number.isInteger(Number(timeFrame)) ||
                      timeFrame < 5 ||
                      timeFrame > 20
                    }
                    isValid={
                      !!timeFrame &&
                      Number.isInteger(Number(timeFrame)) &&
                      timeFrame >= 5 &&
                      timeFrame <= 20
                    }
                  />
                  <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    5 és 20 közötti egész szám legyen!
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <br />
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="role">
                  <Form.Label>Típus: </Form.Label>{" "}
                  <Form.Check
                    label="Egy jó válasz"
                    name={`type-${index}`}
                    type="radio"
                    value="ONE_CHOICE"
                    id={`type-ONE_CHOICE-${index}`}
                    defaultChecked={task.taskType === "ONE_CHOICE"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="Több jó válasz"
                    name={`type-${index}`}
                    type="radio"
                    value="MULTIPLE_CHOICES"
                    id={`type-MULTIPLE_CHOICES-${index}`}
                    defaultChecked={task.taskType === "MULTIPLE_CHOICES"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="Igaz vagy hamis"
                    name={`type-${index}`}
                    type="radio"
                    value="TRUE_FALSE"
                    id={`type-TRUE_FALSE-${index}`}
                    defaultChecked={task.taskType === "TRUE_FALSE"}
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Check
                    label="Sorba rendezés"
                    name={`type-${index}`}
                    type="radio"
                    value="ORDER_LIST"
                    id={`type-ORDER_LIST-${index}`}
                    defaultChecked={task.taskType === "ORDER_LIST"}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Row>
              <ModifyCreatedChoices
                task={task}
                type={taskType}
                index={index}
                modifyTask={modifyTask}
              />
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
