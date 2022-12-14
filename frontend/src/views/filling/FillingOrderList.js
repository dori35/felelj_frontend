import classnames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button, Col } from "react-bootstrap";
import "./FillingTask.css";

export function FillingOrderList({ task, addAnswer, time }) {
  const [added, setAdded] = useState(false);
  const handleClick = (e) => {
    addAnswer({
      id: task.id,
      answer:
        taskChoices[0].id.toString() +
        "," +
        taskChoices[1].id.toString() +
        "," +
        taskChoices[2].id.toString() +
        "," +
        taskChoices[3].id.toString(),
    });
    setAdded(true);
    e.target.setAttribute("disabled", "");
  };
  const [taskChoices, settaskChoices] = useState([
    task.choices[0],
    task.choices[1],
    task.choices[2],
    task.choices[3],
  ]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const handleSort = () => {
    let _taskChoices = [...taskChoices];
    const draggedItemContent = _taskChoices[dragItem.current];
    _taskChoices[dragItem.current] = _taskChoices[dragOverItem.current];
    _taskChoices[dragOverItem.current] = draggedItemContent;

    settaskChoices(_taskChoices);
  };
  useEffect(() => {
    if (time === 0 && !added) {
      addAnswer({
        id: task.id,
        answer: "",
      });
    }
  }, [time]);

  return (
    <div className="list-container">
      {taskChoices.map((choice, index) => (
        <div key={index}>
          <Col>
            <div
              style={{ float: "left", fontWeight: "bold" }}
            >{`${index}. `}</div>
            <div
              key={index}
              className={classnames("list-item btn", {
                "btn btn-primary": choice.id === task.choices[0].id,
                "btn btn-danger": choice.id === task.choices[1].id,
                "btn btn-warning": choice.id === task.choices[2].id,
                "btn btn-success": choice.id === task.choices[3].id,
              })}
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              draggable
            >
              {choice.text}
            </div>
          </Col>
        </div>
      ))}
      <Button onClick={handleClick} className="okButton btn-dark border-dark">
        Ok
      </Button>
    </div>
  );
}
