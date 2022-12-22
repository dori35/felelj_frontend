import { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export function TypeMultipleChoices({ task, index, modifyTask }) {
  const base = () => {
    let array = [];

    let sArray = task.solution.split(",");

    if (sArray.includes(task.choices[0].id.toString())) {
      array.push("0");
    }
    if (sArray.includes(task.choices[1].id.toString())) {
      array.push("1");
    }
    if (sArray.includes(task.choices[2].id.toString())) {
      array.push("2");
    }
    if (sArray.includes(task.choices[3].id.toString())) {
      array.push("3");
    }
    modifyTask({ solutionMultipleChoices: array });
    return array;
  };

  //csak az eredeti solution miatt
  const [solutionArray, setSolutionArray] = useState(
    task.solution !== "" ? task.solution.split(",") : []
  );
  const [solutionMultipleChoices, setSolutionMultipleChoices] = useState(
    task.solution !== "" ? base : []
  );
  const [choice0, setChoice0] = useState(
    task.choices.length === 4 ? task.choices[0].text : ""
  );
  const [choice1, setChoice1] = useState(
    task.choices.length === 4 ? task.choices[1].text : ""
  );
  const [choice2, setChoice2] = useState(
    task.choices.length === 4 ? task.choices[2].text : ""
  );
  const [choice3, setChoice3] = useState(
    task.choices.length === 4 ? task.choices[3].text : ""
  );

  const [choice0Id, setChoice0Id] = useState(
    task.choices.length === 4 ? task.choices[0].id : ""
  );
  const [choice1Id, setChoice1Id] = useState(
    task.choices.length === 4 ? task.choices[1].id : ""
  );
  const [choice2Id, setChoice2Id] = useState(
    task.choices.length === 4 ? task.choices[2].id : ""
  );
  const [choice3Id, setChoice3Id] = useState(
    task.choices.length === 4 ? task.choices[3].id : ""
  );

  const handleCheckSolution = (e) => {
    let newArray;
    if (solutionMultipleChoices.includes(e.target.value)) {
      newArray = [].concat(solutionMultipleChoices);
      const index = newArray.indexOf(e.target.value);
      newArray.splice(index, 1);
    } else {
      newArray = [].concat(solutionMultipleChoices, e.target.value);
    }
    setSolutionMultipleChoices(newArray);
    modifyTask({ solutionMultipleChoices: newArray });
  };

  return (
    <>
      {
        <div as={Col}>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-primary"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              value={0}
              defaultChecked={
                task.solution
                  ? solutionArray.length > 0 &&
                    solutionArray.includes(`${choice0Id}`)
                  : false
              }
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              value={choice0}
              onChange={(e) => {
                setChoice0(e.target.value);
                modifyTask({
                  choices: [
                    { text: e.target.value },
                    { text: choice1 },
                    { text: choice2 },
                    { text: choice3 },
                  ],
                });
              }}
              required
              isInvalid={
                !task.choices ||
                task.choices.length < 1 ||
                task.choices[0].text.length <= 0
              }
              isValid={
                !!task.choices &&
                task.choices.length >= 1 &&
                task.choices[0].text.length > 0
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Kötelező kitölteni
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-danger"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              value={1}
              defaultChecked={
                task.solution
                  ? solutionArray.length > 0 &&
                    solutionArray.includes(`${choice1Id}`)
                  : false
              }
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              value={choice1}
              onChange={(e) => {
                setChoice1(e.target.value);
                modifyTask({
                  choices: [
                    { text: choice0 },
                    { text: e.target.value },
                    { text: choice2 },
                    { text: choice3 },
                  ],
                });
              }}
              required
              isInvalid={
                !task.choices ||
                task.choices.length < 2 ||
                task.choices[1].text.length <= 0
              }
              isValid={
                !!task.choices &&
                task.choices.length >= 2 &&
                task.choices[1].text.length > 0
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Kötelező kitölteni
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-warning"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              value={2}
              defaultChecked={
                task.solution
                  ? solutionArray.length > 0 &&
                    solutionArray.includes(`${choice2Id}`)
                  : false
              }
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              value={choice2}
              onChange={(e) => {
                setChoice2(e.target.value);
                modifyTask({
                  choices: [
                    { text: choice0 },
                    { text: choice1 },
                    { text: e.target.value },
                    { text: choice3 },
                  ],
                });
              }}
              required
              isInvalid={
                !task.choices ||
                task.choices.length < 3 ||
                task.choices[2].text.length <= 0
              }
              isValid={
                !!task.choices &&
                task.choices.length >= 3 &&
                task.choices[2].text.length > 0
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Kötelező kitölteni
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-success"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              value={3}
              defaultChecked={
                task.solution
                  ? solutionArray.length > 0 &&
                    solutionArray.includes(`${choice3Id}`)
                  : false
              }
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              value={choice3}
              onChange={(e) => {
                setChoice3(e.target.value);
                modifyTask({
                  choices: [
                    { text: choice0 },
                    { text: choice1 },
                    { text: choice2 },
                    { text: e.target.value },
                  ],
                });
              }}
              required
              isInvalid={
                !task.choices ||
                task.choices.length < 4 ||
                task.choices[3].text.length <= 0
              }
              isValid={
                !!task.choices &&
                task.choices.length >= 4 &&
                task.choices[3].text.length > 0
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Kötelező kitölteni
            </Form.Control.Feedback>
          </InputGroup>
        </div>
      }
      {solutionMultipleChoices.length <= 1 && (
        <span style={{ color: "red" }}>
          Kérlek válassz ki több helyes választ!
        </span>
      )}
    </>
  );
}
