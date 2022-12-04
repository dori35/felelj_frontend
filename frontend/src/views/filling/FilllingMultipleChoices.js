import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingMultipleChoices.css";

export function FillingMultipleChoices({ task, addAnswer }) {
  const handleClick = () => {
    addAnswer({ id: task.id, answer: answer });
  };

  const [answer, setAnswer] = useState("");
  const handleChange = (val) => setAnswer(val.toString());
  return (
    <>
      <ToggleButtonGroup type="checkbox" onChange={handleChange}>
        <ToggleButton
          id={`multipleChoices-${task.choices[0].id}`}
          variant="primary"
          value={task.choices[0].id.toString()}
        >
          {task.choices[0].text}
        </ToggleButton>
        <ToggleButton
          id={`multipleChoices-${task.choices[1].id}`}
          variant="danger"
          value={task.choices[1].id.toString()}
        >
          {task.choices[1].text}
        </ToggleButton>
        <ToggleButton
          id={`multipleChoices-${task.choices[2].id}`}
          variant="warning"
          value={task.choices[2].id.toString()}
        >
          {task.choices[2].text}
        </ToggleButton>{" "}
        <ToggleButton
          id={`multipleChoices-${task.choices[3].id}`}
          variant="success"
          value={task.choices[3].id.toString()}
        >
          {task.choices[3].text}
        </ToggleButton>
      </ToggleButtonGroup>
      <Button onClick={handleClick} className="okButton btn-dark border-dark">
        Ok
      </Button>
    </>
  );
}
