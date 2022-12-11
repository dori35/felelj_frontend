import { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./FillingOneChoice.css";

export function FillingOneChoice({ task, addAnswer, time }) {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (time === 0) {
      addAnswer({ id: task.id, answer: answer });
    }
  }, [time]);
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
    </>
  );
}
