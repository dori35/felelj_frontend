import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newTest } from "../../state/createdTests/actions";
import { ModifyCreatedTask } from "../modify/ModifyCreatedTask";

export function NewTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let testSchema = {
    title: "",
    subject: "",
    random: 0,
  };
  const [test, setTest] = useState(testSchema);
  const [title, setTitle] = useState(test.title);
  const [subject, setSubject] = useState(test.subject);
  const [random, setRandom] = useState(test.random);
  const [modTasks, setModTasks] = useState([]);

  let taskSchema = {
    text: "",
    taskType: "TRUE_FALSE",
    timeFrame: 0,
    point: "",
    solution: 0,
    choices: "",
  };
  const handleNewTaskButtonClick = (e) => {
    addTask(taskSchema);
  };
  const handleTaskCloseButtonClick = (index) => {
    removeTask(index);
  };
  const handleModifyTaskSubmit = (e) => {
    e.preventDefault();
    console.log(title, subject, random, modTasks);
    dispatch(newTest(title, subject, random, modTasks));
    navigate("/");
  };

  const addTask = (task) => {
    setModTasks([...modTasks, task]);
  };
  const removeTask = (index) => {
    let m = modTasks.filter((t, i) => index !== i);
    setModTasks([...m]);
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
                    handleTaskCloseButtonClick={() =>
                      handleTaskCloseButtonClick(index)
                    }
                  />
                ))}
                <Button type="button" onClick={handleNewTaskButtonClick}>
                  Új Feladat
                </Button>
                <br />
                <br />
                <Button type="submit">Létrehozás</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
