import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTestResults } from "../../state/testResults/selectros";
import { CompletedTask } from "../completed/CompletedTask";

export function TestFillerTask() {
  const { Index, fillerId } = useParams();
  const results = useSelector(getTestResults);

  const tasks = results[Index].fillers.find(
    (e) => e.userId.toString() === fillerId
  ).tasks;

  return (
    <>
      {tasks && (
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
                {tasks.map((task, index) => (
                  <CompletedTask task={task} key={index} />
                ))}
              </Card.Body>
            </Card>
          </div>
        </Container>
      )}
    </>
  );
}
