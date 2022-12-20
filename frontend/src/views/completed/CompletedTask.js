import { Card, Container } from "react-bootstrap";
import { CompletedChoices } from "./CompletedChoices";
import classnames from "classnames";

export function CompletedTask({ task }) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Container className=" py-5">
          <div className="d-flex justify-content-center">
            <Card className="cardColor text-dark  border border-dark  vw-100 mx-md-5">
              <Card.Body className="text-center">
                <div className="pb-5 mb-md-5 mt-md-4">
                  <Card.Title className="fw-bold text-uppercase">
                    {task.text}
                  </Card.Title>
                  <div>
                    <span
                      className={classnames("pointSpan ", {
                        " correctColor": task.currentPoint > 0,
                        " mistakeColor": task.currentPoint <= 0,
                      })}
                    >
                      {`${task.currentPoint} / ${task.point}`}
                    </span>
                  </div>
                  <div align="center" className="circle border border-success">
                    <span className="text_circle">{task.timeFrame}</span>
                  </div>{" "}
                  <CompletedChoices task={task} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
