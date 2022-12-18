import { useEffect, useState } from "react";
import { Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingMultipleChoices.css";

export function FillingMultipleChoices({ task, addAnswer, time }) {
  const [answer, setAnswer] = useState("");
  const handleChange = (val) => {
    setAnswer(val.toString());
  };

  useEffect(() => {
    if (time === 0) {
      addAnswer({ id: task.id, answer: answer });
    }
  }, [time]);

  return (
    <>
      <ToggleButtonGroup type="checkbox" onChange={handleChange}>
        <Row>
          <ToggleButton
            className="btn-lg border-dark col "
            id={`multipleChoices-${task.choices[0].id}`}
            variant="primary"
            value={task.choices[0].id.toString()}
          >
            {task.choices[0].text}
          </ToggleButton>
          <ToggleButton
            className="btn-lg border-dark col "
            id={`multipleChoices-${task.choices[1].id}`}
            variant="danger"
            value={task.choices[1].id.toString()}
          >
            {task.choices[1].text}
          </ToggleButton>
          <div className="w-100"></div>
          <ToggleButton
            className="btn-lg border-dark col"
            id={`multipleChoices-${task.choices[2].id}`}
            variant="warning"
            value={task.choices[2].id.toString()}
          >
            {task.choices[2].text}
          </ToggleButton>
          <ToggleButton
            className="btn-lg border-dark col"
            id={`multipleChoices-${task.choices[3].id}`}
            variant="success"
            value={task.choices[3].id.toString()}
          >
            {task.choices[3].text}
          </ToggleButton>
        </Row>
      </ToggleButtonGroup>
    </>
  );
}
