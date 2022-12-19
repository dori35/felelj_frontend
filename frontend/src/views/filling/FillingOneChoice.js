import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import classnames from "classnames";
import "./FillingOneChoice.css";

export function FillingOneChoice({ task, addAnswer, time }) {
  const [answer, setAnswer] = useState("");

  const handleClick = (e) => {
    console.log(e.target.value);
    setAnswer(e.target.value);
  };

  useEffect(() => {
    if (time === 0) {
      console.log(answer);
      addAnswer({ id: task.id, answer: answer });
    }
  }, [time]);

  return (
    <>
      <ButtonGroup
        type="radio"
        name={`oneChoice-${task.id}`}
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Row className="row-12">
            <Button
              id={task.choices[0].id}
              variant="primary"
              value={task.choices[0].id.toString()}
              className={classnames("btn-lg border-dark col-6", {
                "border border-info border-4": answer.includes(
                  task.choices[0].id.toString()
                ),
              })}
              onClick={(e) => handleClick(e)}
            >
              {task.choices[0].text}
            </Button>
            <Button
              className={classnames("btn-lg border-dark col-6", {
                "border border-info border-4": answer.includes(
                  task.choices[1].id.toString()
                ),
              })}
              id={task.choices[1].id}
              variant="danger"
              value={task.choices[1].id.toString()}
              onClick={(e) => handleClick(e)}
            >
              {task.choices[1].text}
            </Button>
            <div className="w-100"></div>
            <Button
              className={classnames("btn-lg border-dark col-6", {
                "border border-info border-4": answer.includes(
                  task.choices[2].id.toString()
                ),
              })}
              id={task.choices[2].id}
              variant="warning"
              value={task.choices[2].id.toString()}
              onClick={(e) => handleClick(e)}
            >
              {task.choices[2].text}
            </Button>
            <Button
              className={classnames("btn-lg border-dark col-6", {
                "border border-info border-4": answer.includes(
                  task.choices[3].id.toString()
                ),
              })}
              id={task.choices[3].id}
              variant="success"
              value={task.choices[3].id.toString()}
              onClick={(e) => handleClick(e)}
            >
              {task.choices[3].text}
            </Button>
          </Row>
        </Container>
      </ButtonGroup>
    </>
  );
}
