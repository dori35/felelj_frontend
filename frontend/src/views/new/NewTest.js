import { useEffect, useState } from "react";
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
    random: false,
  };
  const [test, setTest] = useState(testSchema);
  const [title, setTitle] = useState(test.title);
  const [subject, setSubject] = useState(test.subject);
  const [random, setRandom] = useState(test.random);
  const [modTasks, setModTasks] = useState([]);

  useEffect(() => {
    if (test) {
      setTitle(test.title);
      setSubject(test.subject);
      setRandom(test.random);
      setModTasks([]);
    }
  }, [test]);

  let taskSchema = {
    text: "",
    taskType: "ONE_CHOICE",
    timeFrame: 5,
    point: "",
    solution: "",
    choices: [],
  };
  const handleNewTaskButtonClick = (e) => {
    addTask(taskSchema);
  };
  const handleTaskCloseButtonClick = (index) => {
    removeTask(index);
  };
  const handleModifyTaskSubmit = (e) => {
    e.preventDefault();

    let errors = [];
    if (title.length <= 0 || title.length > 20) {
      errors.push("title");
    }
    if (subject.length <= 0 || subject.length > 20) {
      errors.push("subject");
    }
    if (typeof random != "boolean") {
      errors.push("random");
    }

    modTasks.forEach((m) => {
      if (m.point < 1 || m.point > 100) {
        errors.push("point");
      }
      if (m.text.length <= 0 || m.text.length > 200) {
        errors.push("text");
      }
      if (m.timeFrame < 5 || m.timeFrame > 20) {
        errors.push("timeFrame");
      }

      if (
        m.taskType === "ORDER_LIST" ||
        m.taskType === "MULTIPLE_CHOICES" ||
        m.taskType === "ONE_CHOICE"
      ) {
        if (m.choices.length !== 4) {
          errors.push("choicesLength");
        } else if (
          m.choices[0].text.length <= 0 ||
          m.choices[0].text.length > 20 ||
          m.choices[1].text.length <= 0 ||
          m.choices[1].text.length > 20 ||
          m.choices[2].text.length <= 0 ||
          m.choices[2].text.length > 20 ||
          m.choices[3].text.length <= 0 ||
          m.choices[3].text.length > 20
        ) {
          errors.push("choicesText");
        }
      }

      if (m.taskType === "MULTIPLE_CHOICES") {
        if (
          !m.solutionMultipleChoices ||
          (!!m.solutionMultipleChoices && m.solutionMultipleChoices.length < 1)
        ) {
          errors.push("solutionMultipleChoices");
        }
      }

      if (m.taskType === "ONE_CHOICE") {
        if (!m.solutionOneChoice || m.solutionOneChoice === "") {
          errors.push("solutionOneChoice");
        }
      }

      if (m.taskType === "TRUE_FALSE") {
        if (
          !m.solutionTrueFalse ||
          (!!m.solutionTrueFalse &&
            m.solutionTrueFalse !== "0" &&
            m.solutionTrueFalse !== "1")
        ) {
          errors.push("solutionTrueFalse");
        }
      }
    });

    if (errors.length > 0) {
      console.log(errors);
    } else {
      console.log(title, subject, random, modTasks);
      dispatch(newTest(title, subject, random, modTasks));
      navigate("/");
    }
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
              <Form
                noValidate
                validated={false}
                onSubmit={handleModifyTaskSubmit}
              >
                <Row>
                  <Form.Label column="lg" lg={2}>
                    Teszt címe:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      isInvalid={title.length <= 0 || title.length > 20}
                      isValid={title.length > 0 && title.length <= 20}
                    />
                    <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {title.length > 20
                        ? "Túl hosszú szöveg"
                        : "Kötelező kitölteni"}
                    </Form.Control.Feedback>
                  </Col>
                  <Form.Group as={Col} md="4" controlId="role">
                    <Form.Check
                      type="checkbox"
                      id="randomSwitch"
                      name={`random${test.id}`}
                      label="Random módon legyenek a feladatok"
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
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      isInvalid={subject.length <= 0 || subject.length > 20}
                      isValid={subject.length > 0 && subject.length <= 20}
                    />
                    <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {subject.length > 20
                        ? "Túl hosszú szöveg"
                        : "Kötelező kitölteni"}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <br />

                {modTasks &&
                  modTasks.map((task, index) => (
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
