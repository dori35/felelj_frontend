import { useEffect, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
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
        <ToggleButton id={`true-${task.id}`} value={1}>
          Igaz
        </ToggleButton>
        <ToggleButton id={`false-${task.id}`} value={0}>
          Hamis
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
