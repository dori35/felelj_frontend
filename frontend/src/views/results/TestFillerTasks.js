import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTestResults } from "../../state/testResults/actions";
import { getTestResults } from "../../state/testResults/selectros";
import { CompletedTask } from "../completed/CompletedTask";

export function TestFillerTask() {
  const { Index, createdTestId, fillerId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestResults(createdTestId));
  }, [dispatch, createdTestId]);
  const results = useSelector(getTestResults);
  const [fillers, setFillers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (results !== null && results.length > 0) {
      setFillers(results[Index].fillers);
    }
  }, [results]);

  useEffect(() => {
    if (fillers !== null && fillers.length > 0) {
      setTasks(
        results[Index].fillers.find((e) => e.userId.toString() === fillerId)
          .tasks
      );
    }
  }, [fillers]);

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
