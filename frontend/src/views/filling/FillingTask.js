import { Card, Container, Form } from "react-bootstrap";
import "./FillingTask.css";
import { FillingChoices } from "./FillingChoices";

export function FillingTask({ task, addAnswer }) {
  return (
    <div className="alma d-flex justify-content-center align-items-center">
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <Card className="cardColor text-dark  border border-dark">
            <Card.Body className="text-center">
              <div className="pb-5 mb-md-5 mt-md-4">
                <Card.Title className="fw-bold text-uppercase">
                  {task.text}
                </Card.Title>
                <div align="center" className="circle border border-success">
                  <span className="text_circle">{task.timeFrame}</span>
                </div>
                <FillingChoices task={task} addAnswer={addAnswer} />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
