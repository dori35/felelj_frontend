import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormText,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { ModifyCreatedTask } from "./ModifyCreatedTask";

export function ModifyCreatedTest() {
  const { createdTestId } = useParams();
  const createdTests = useSelector(getCreatedTests);

  const test = createdTests.find(
    (createdTest) => createdTest.id === createdTestId
  );
  const handleNewTaskButtonClick = (e) => {
    console.log("alma");
  };
  return (
    <div>
      <Container className="py-5">
        <div>
          <Card className=" bg-dark text-light">
            <Card.Body>
              <Card.Title className="fw-bold text-uppercase">
                Teszt adatai
              </Card.Title>
              <Form>
                <Row>
                  <FormText> Létrehozva: {test.createdDate}</FormText>
                </Row>
                <Row>
                  <FormText>
                    {" "}
                    Teszt hossza:{" "}
                    {Math.floor(test.time / 60) +
                      ":" +
                      (test.time % 60 ? test.time % 60 : "00")}
                  </FormText>
                </Row>
                <Row>
                  <FormText> Összesen elérhető pontszám: {test.point}</FormText>
                </Row>
                <Row>
                  <FormText> Feladatok száma: {test.taskNumber}</FormText>
                </Row>
                <Row>
                  <Form.Label column="lg" lg={2}>
                    Teszt címe:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder={test.title}
                    />
                  </Col>
                  <Form.Group as={Col} md="4" controlId="role">
                    <Form.Check
                      type="checkbox"
                      id="randomSwitch"
                      label="Random módon legyenek a kérdések"
                      defaultChecked={test.random}
                    />
                  </Form.Group>
                </Row>
                <br />
                <Row>
                  <Form.Label column="lg" lg={2}>
                    Tantárgy:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder={test.subject}
                    />
                  </Col>
                </Row>
                <br />

                {test.tasks.map((task) => (
                  <ModifyCreatedTask key={task.id} task={task} />
                ))}
                <Button type="button" onClick={handleNewTaskButtonClick}>
                  Új Feladat
                </Button>
                <br />
                <br />
                <Button type="submit">Módosítás</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
