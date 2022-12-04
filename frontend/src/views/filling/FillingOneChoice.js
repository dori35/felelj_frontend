import { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingOneChoice.css";

export function FillingOneChoice({ task, addAnswer }) {
  const handleClick = () => {
    addAnswer({ id: task.id, answer: answer });
  };

  const [answer, setAnswer] = useState("");
  const handleChange = (val) => {
    setAnswer(val.toString());
  };
  return (
    <>
      <ToggleButtonGroup
        type="radio"
        name={`oneChoice-${task.id}`}
        onChange={handleChange}
      >
        <ToggleButton
          className="oneChoiceButton"
          id={task.choices[0].id}
          value={task.choices[0].id}
          onChange={handleChange}
        >
          {task.choices[0].text}
        </ToggleButton>
        <ToggleButton
          className="oneChoiceButton"
          id={task.choices[1].id}
          value={task.choices[1].id}
        >
          {task.choices[1].text}
        </ToggleButton>
        <ToggleButton
          className="oneChoiceButton"
          id={task.choices[2].id}
          value={task.choices[2].id}
        >
          {task.choices[2].text}
        </ToggleButton>
        <ToggleButton
          className="oneChoiceButton"
          id={task.choices[3].id}
          value={task.choices[3].id}
        >
          {task.choices[3].text}
        </ToggleButton>
      </ToggleButtonGroup>{" "}
      <Button onClick={handleClick} className="okButton btn-dark border-dark">
        Ok
      </Button>
    </>
  );
}
