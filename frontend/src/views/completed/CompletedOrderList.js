import { Col } from "react-bootstrap";
import { useState } from "react";
import classnames from "classnames";

export function CompletedOrderList({ task }) {
  const [taskChoices, settaskChoices] = useState([
    task.choices[0],
    task.choices[1],
    task.choices[2],
    task.choices[3],
  ]);
  return (
    <>
      <div className="list-container">
        {taskChoices.map((choice, index) => (
          <div key={index}>
            <Col>
              <div style={{ float: "left", fontWeight: "bold" }}>{`${
                index + 1
              }. `}</div>

              <div
                key={index}
                className={classnames("list-item btn", {
                  "btn btn-primary": choice.id === task.choices[0].id,
                  "btn btn-danger": choice.id === task.choices[1].id,
                  "btn btn-warning": choice.id === task.choices[2].id,
                  "btn btn-success": choice.id === task.choices[3].id,
                  disabled: true,
                })}
              >
                {choice.text}
              </div>
            </Col>
          </div>
        ))}
      </div>
    </>
  );
}
