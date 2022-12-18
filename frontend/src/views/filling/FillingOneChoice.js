import { useEffect, useState } from "react";
import { Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
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
        <Row>
          <ToggleButton
            className="border-dark col "
            id={task.choices[0].id}
            variant="primary"
            value={task.choices[0].id}
          >
            {task.choices[0].text}
          </ToggleButton>
          <ToggleButton
            className=" border-dark col  "
            id={task.choices[1].id}
            variant="danger"
            value={task.choices[1].id}
          >
            {task.choices[1].text}
          </ToggleButton>
          <div className="w-100"></div>
          <ToggleButton
            className=" border-dark col"
            id={task.choices[2].id}
            variant="warning"
            value={task.choices[2].id}
          >
            almaaaa
          </ToggleButton>
          <ToggleButton
            className="border-dark col  "
            id={task.choices[3].id}
            variant="success"
            value={task.choices[3].id}
          >
            alm
          </ToggleButton>
        </Row>
      </ToggleButtonGroup>
    </>
  );
}
