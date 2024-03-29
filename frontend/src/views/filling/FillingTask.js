import { Card, Container } from "react-bootstrap";
import { FillingChoices } from "./FillingChoices";
import "../css/filling/FillingTask.css";

export function FillingTask({ task, addAnswer, time }) {
  return (
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
                  <span className="pointSpan"> {`(${task.point} pont)`}</span>
                </div>
                <div align="center" className="circle border border-success">
                  <span className="textCircle">{time}</span>
                </div>
                <FillingChoices task={task} addAnswer={addAnswer} time={time} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
