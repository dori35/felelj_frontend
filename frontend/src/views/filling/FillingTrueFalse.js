import { useEffect, useState } from "react";
import { Col, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingTrueFalse.css";

export function FillingTrueFalse({ task, addAnswer, time }) {
  const [answer, setAnswer] = useState("");
  const handleChange = (val) => setAnswer(val.toString());

  useEffect(() => {
    if (time === 0) {
      addAnswer({ id: task.id, answer: answer });
    }
  }, [time]);

  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name={`trueFalse-${task.id}`}
        onChange={handleChange}
      >
        <Col>
          <ToggleButton
            id={`true-${task.id}`}
            className="btn-lg border-dark   "
            variant="success"
            value={1}
          >
            Igaz
          </ToggleButton>
          <ToggleButton
            id={`false-${task.id}`}
            className="btn-lg border-dark  "
            variant="danger"
            value={0}
          >
            Hamis
          </ToggleButton>
        </Col>
      </ToggleButtonGroup>
    </>
  );
}
