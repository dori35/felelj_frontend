import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import "./CompletedColors.css";
import classnames from "classnames";

export function CompletedMultipleChoices({ task }) {
  const solutionArray = task.solution.split(",");
  const answerArray = task.answer.split(",");

  return (
    <>
      <ButtonGroup
        type="checkbox"
        name={`MultipleChoices-${task.id}`}
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Button
            id={`multipleChoices-${task.choices[0].id}`}
            variant="primary"
            className={classnames("btn-lg  mx-2 col-5  ", {
              " correctLeftOut ":
                solutionArray.includes(task.choices[0].id.toString()) &
                !answerArray.includes(task.choices[0].id.toString()),
              "mistake ":
                !solutionArray.includes(task.choices[0].id.toString()) &&
                answerArray.includes(task.choices[0].id.toString()),
              " correct ":
                solutionArray.includes(task.choices[0].id.toString()) &&
                answerArray.includes(task.choices[0].id.toString()),
            })}
            disabled
          >
            {task.choices[0].text}
          </Button>
          <Button
            className={classnames("btn-lg  mx-2 col-5  ", {
              " correctLeftOut ":
                solutionArray.includes(task.choices[1].id.toString()) &
                !answerArray.includes(task.choices[1].id.toString()),
              " mistake ":
                !solutionArray.includes(task.choices[1].id.toString()) &&
                answerArray.includes(task.choices[1].id.toString()),
              "correct ":
                solutionArray.includes(task.choices[1].id.toString()) &&
                answerArray.includes(task.choices[1].id.toString()),
            })}
            id={`multipleChoices-${task.choices[1].id}`}
            variant="danger"
            disabled
          >
            {task.choices[1].text}
          </Button>
          <div className="w-100"></div>
          <Button
            className={classnames("btn-lg mt-md-3 mx-2 col-5  ", {
              " correctLeftOut ":
                solutionArray.includes(task.choices[2].id.toString()) &
                !answerArray.includes(task.choices[2].id.toString()),
              " mistake ":
                !solutionArray.includes(task.choices[2].id.toString()) &&
                answerArray.includes(task.choices[2].id.toString()),
              "correct ":
                solutionArray.includes(task.choices[2].id.toString()) &&
                answerArray.includes(task.choices[2].id.toString()),
            })}
            id={`multipleChoices-${task.choices[2].id}`}
            variant="warning"
            disabled
          >
            {task.choices[2].text}
          </Button>
          <Button
            className={classnames("btn-lg mt-md-3  mx-2 col-5  ", {
              " correctLeftOut":
                solutionArray.includes(task.choices[3].id.toString()) &
                !answerArray.includes(task.choices[3].id.toString()),
              " mistake ":
                !solutionArray.includes(task.choices[3].id.toString()) &&
                answerArray.includes(task.choices[3].id.toString()),
              "correct ":
                solutionArray.includes(task.choices[3].id.toString()) &&
                answerArray.includes(task.choices[3].id.toString()),
            })}
            id={`multipleChoices-${task.choices[3].id}`}
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
