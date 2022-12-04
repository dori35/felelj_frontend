import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingTrueFalse.css";

export function FillingTrueFalse({ task, addAnswer }) {
  const handleClick = () => {
    addAnswer({ id: task.id, answer: answer });
  };

  const [answer, setAnswer] = useState("");
  const handleChange = (val) => setAnswer(val.toString());

  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name={`trueFalse-${task.id}`}
        onChange={handleChange}
      >
        <ToggleButton id={`true-${task.id}`} value={1}>
          Igaz
        </ToggleButton>
        <ToggleButton id={`false-${task.id}`} value={0}>
          Hamis
        </ToggleButton>
      </ToggleButtonGroup>
      <Button onClick={handleClick} className="okButton btn-dark border-dark">
        Ok
      </Button>
    </>
  );
}
