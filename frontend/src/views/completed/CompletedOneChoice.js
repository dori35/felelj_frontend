import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import "./CompletedColors.css";
import classnames from "classnames";

export function CompletedOneChoice({ task }) {
  return (
    <>
      <ButtonGroup
        type="radio"
        name={`oneChoice-${task.id}`}
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Button
            id={task.choices[0].id}
            variant="primary"
            className={classnames("btn-lg  mx-2 col-5  ", {
              " correct":
                task.solution === task.choices[0].id.toString() &&
                task.answer === task.choices[0].id.toString(),
              " mistake":
                task.solution !== task.choices[0].id.toString() &&
                task.answer === task.choices[0].id.toString(),
              " correctLeftOut ":
                task.solution === task.choices[0].id.toString() &&
                task.answer !== task.choices[0].id.toString(),
            })}
            disabled
          >
            {task.choices[0].text}
          </Button>
          <Button
            className={classnames("btn-lg  mx-2 col-5  ", {
              " correct":
                task.solution === task.choices[1].id.toString() &&
                task.answer === task.choices[1].id.toString(),
              " mistake":
                task.solution !== task.choices[1].id.toString() &&
                task.answer === task.choices[1].id.toString(),
              " correctLeftOut ":
                task.solution === task.choices[1].id.toString() &&
                task.answer !== task.choices[1].id.toString(),
            })}
            id={task.choices[1].id}
            variant="danger"
            disabled
          >
            {task.choices[1].text}
          </Button>
          <div className="w-100"></div>
          <Button
            className={classnames("btn-lg mt-md-3 mx-2 col-5  ", {
              " correct":
                task.solution === task.choices[2].id.toString() &&
                task.answer === task.choices[2].id.toString(),
              " mistake":
                task.solution !== task.choices[2].id.toString() &&
                task.answer === task.choices[2].id.toString(),
              " correctLeftOut ":
                task.solution === task.choices[2].id.toString() &&
                task.answer !== task.choices[2].id.toString(),
            })}
            id={task.choices[2].id}
            variant="warning"
            disabled
          >
            {task.choices[2].text}
          </Button>
          <Button
            className={classnames("btn-lg mt-md-3 mx-2 col-5  ", {
              " correct":
                task.solution === task.choices[3].id.toString() &&
                task.answer === task.choices[3].id.toString(),
              " mistake":
                task.solution !== task.choices[3].id.toString() &&
                task.answer === task.choices[3].id.toString(),
              " correctLeftOut ":
                task.solution === task.choices[3].id.toString() &&
                task.answer !== task.choices[3].id.toString(),
            })}
            id={task.choices[3].id}
            variant="success"
            disabled
          >
            {task.choices[3].text}
          </Button>
        </Container>
      </ButtonGroup>
    </>
  );
}
