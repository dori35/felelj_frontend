import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCompletedTests } from "../../state/completedTests/selectors";
import { CompletedTask } from "./CompletedTask";
import "./CompletedTestResults.css";

export function CompletedTestResults() {
  const { completedTestId, Index } = useParams();
  const completedTests = useSelector(getCompletedTests);
  const test = completedTests[Index];

  return (
    <>
      {test && test.tasks && (
        <Container className="py-5">
          <div>
            <Card className=" bg-dark text-light">
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase">
                  Feladatok
                </Card.Title>

                <div className="box mistakeSquare"></div>
                <span className="explanation">- Rossz válasz</span>
                <br />
                <div className="box correctSquare"></div>
                <span className="explanation">- Helyes válasz</span>
                <br />
                <div className="box  correctLeftOutSquare"></div>
                <span className="explanation">
                  - Helyes (nem jelölt) válasz
                </span>
                {test.tasks.map((task) => (
                  <CompletedTask task={task} key={task.id} />
                ))}
              </Card.Body>
            </Card>
          </div>
        </Container>
      )}
    </>
  );
}
