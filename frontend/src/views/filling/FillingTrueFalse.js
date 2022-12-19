import { useEffect, useState } from "react";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import "./FillingTrueFalse.css";
import classnames from "classnames";

export function FillingTrueFalse({ task, addAnswer, time }) {
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
    <ButtonGroup
      type="radio"
      name={`trueFalse-${task.id}`}
      style={{ width: "100%" }}
    >
      <Container fluid>
        <Button
          id={`true-${task.id}`}
          className={classnames("btn-lg border-dark mx-2 col-4 ", {
            "border border-info border-4": answer === "1",
          })}
          variant="success"
          value="1"
          onClick={(e) => handleClick(e)}
        >
          Igaz
        </Button>
        <Button
          id={`false-${task.id}`}
          className={classnames("btn-lg border-dark mx-2 col-4  ", {
            "border border-info border-4": answer === "0",
          })}
          variant="danger"
          value="0"
          onClick={(e) => handleClick(e)}
        >
          Hamis
        </Button>
      </Container>
    </ButtonGroup>
  );
}
