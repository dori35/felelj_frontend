import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormText,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifyTest } from "../../state/createdTests/actions";
import { getCreatedTests } from "../../state/createdTests/selectors";
import { ModifyCreatedTask } from "./ModifyCreatedTask";

export function ModifyCreatedTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createdTestId } = useParams();
  const createdTests = useSelector(getCreatedTests);

  const test = createdTests.find(
    (createdTest) => createdTest.id === createdTestId
  );
  const [title, setTitle] = useState(test.title);
  const [subject, setSubject] = useState(test.subject);
  const [random, setRandom] = useState(test.random);
  const [tasks, setTasks] = useState(test.tasks);
  const [modTasks, setModTasks] = useState(JSON.parse(JSON.stringify(tasks)));

  let taskSchema = {
    text: "",
    taskType: "ONE_CHOICE",
    timeFrame: 0,
    point: "",
    solution: "",
    choices: "",
  };
  const handleNewTaskButtonClick = (e) => {
    addTask(taskSchema);
  };

  const handleModifyTaskSubmit = (e) => {
    e.preventDefault();
    console.log(title, subject, random, modTasks);
    //dispatch(modifyTest(createdTestId, title, subject, random, modTasks));
    //navigate("/");
  };

  const addTask = (task) => {
    setModTasks([...modTasks, task]);
  };

  const modifyTask = (mTask, par) => {
    mTask[Object.entries(par)[0][0]] = Object.entries(par)[0][1];
    console.log(modTasks);
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
              <Form onSubmit={handleModifyTaskSubmit}>
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
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                  <Form.Group as={Col} md="4" controlId="role">
                    <Form.Check
                      type="checkbox"
                      id="randomSwitch"
                      name={`random${test.id}`}
                      label="Random módon legyenek a kérdések"
                      defaultChecked={test.random}
                      onChange={(e) => setRandom(e.target.checked)}
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
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Col>
                </Row>
                <br />

                {modTasks.map((task, index) => (
                  <ModifyCreatedTask
                    key={index}
                    task={task}
                    modifyTask={(par) => modifyTask(task, par)}
                    index={index}
                  />
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
