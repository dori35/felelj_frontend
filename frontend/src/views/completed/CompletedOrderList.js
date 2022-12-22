import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import classnames from "classnames";
import "../css/completed/CompletedColors.css";

export function CompletedOrderList({ task }) {
  const baseSolution = () => {
    let array = [];
    const solutionArray = task.solution.split(",");
    solutionArray.map((element) => {
      if (element.toString() === task.choices[0].id.toString()) {
        array.push(task.choices[0]);
      } else if (element.toString() === task.choices[1].id.toString()) {
        array.push(task.choices[1]);
      } else if (element.toString() === task.choices[2].id.toString()) {
        array.push(task.choices[2]);
      } else if (element.toString() === task.choices[3].id.toString()) {
        array.push(task.choices[3]);
      }
    });

    return array;
  };

  const baseAnswer = () => {
    let array = [];
    const answerArray = task.answer.split(",");
    answerArray.map((element) => {
      if (element.toString() === task.choices[0].id.toString()) {
        array.push(task.choices[0]);
      } else if (element.toString() === task.choices[1].id.toString()) {
        array.push(task.choices[1]);
      } else if (element.toString() === task.choices[2].id.toString()) {
        array.push(task.choices[2]);
      } else if (element.toString() === task.choices[3].id.toString()) {
        array.push(task.choices[3]);
      }
    });

    return array;
  };

  const [solutionChoices, setSolutionChoices] = useState(baseSolution);
  const [answerChoices, setAnswerChoices] = useState(baseAnswer);

  return (
    <>
      <div className="list-container">
        <Container fluid style={{ width: "100%" }}>
          <Row>
            <Col>
              {" "}
              <span style={{ fontWeight: "bold" }}>Megoldás</span>
              {solutionChoices.map((choice, index) => (
                <div key={index}>
                  <Col>
                    <div
                      style={{
                        float: "left",
                        fontWeight: "bold",
                      }}
                    >{`${index + 1}. `}</div>

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
                  </Col>{" "}
                </div>
              ))}
            </Col>{" "}
            <Col>
              <span style={{ fontWeight: "bold" }}>Válasz</span>
              {answerChoices.map((choice, index) => (
                <div key={index}>
                  <Col>
                    <div
                      style={{
                        float: "left",
                        fontWeight: "bold",
                      }}
                    >{`${index + 1}. `}</div>

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
                  </Col>{" "}
                </div>
              ))}
              {answerChoices.length === 0 && (
                <>
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Nem rendezted sorba
                  </span>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
