import { Button, ButtonGroup, Container } from "react-bootstrap";
import classnames from "classnames";
import "../css/completed/CompletedColors.css";

export function CompletedTrueFalse({ task }) {
  return (
    <>
      <ButtonGroup type="radio" style={{ width: "100%" }}>
        <Container fluid>
          <Button
            className={classnames("btn-lg mx-2 col-4 ", {
              " correct": task.solution === "1" && task.answer === "1",
              " mistake": task.solution !== "1" && task.answer === "1",
              " correctLeftOut ": task.solution === "1" && task.answer !== "1",
            })}
            variant="success"
            value="1"
            disabled
          >
            Igaz
          </Button>
          <Button
            className={classnames("btn-lg mx-2 col-4 ", {
              " correct": task.solution === "0" && task.answer === "0",
              " mistake": task.solution !== "0" && task.answer === "0",
              " correctLeftOut ": task.solution === "0" && task.answer !== "0",
            })}
            variant="danger"
            value="0"
            disabled
          >
            Hamis
          </Button>
        </Container>
      </ButtonGroup>
    </>
  );
}
