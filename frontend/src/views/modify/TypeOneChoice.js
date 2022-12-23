import { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export function TypeOneChoice({ task, index, modifyTask }) {
  const base = () => {
    let s = task.solution;

    if (s === task.choices[0].id.toString()) {
      modifyTask({ solutionOneChoice: "0" });
      return "0";
    }
    if (s === task.choices[1].id.toString()) {
      modifyTask({ solutionOneChoice: "1" });
      return "1";
    }
    if (s === task.choices[2].id.toString()) {
      modifyTask({ solutionOneChoice: "2" });
      return "2";
    }
    if (s === task.choices[3].id.toString()) {
      modifyTask({ solutionOneChoice: "3" });
      return "3";
    }

    return "";
  };

  const [solutionOneChoice, setSolutionOneChoice] = useState(
    task.solution !== "" ? base : ""
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
    setSolutionOneChoice(e.target.value);
    modifyTask({ solutionOneChoice: e.target.value });
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
              type="radio"
              value={0}
              defaultChecked={
                task.solution !== "" && task.solution === `${choice0Id}`
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
                task.choices.length !== 4 ||
                (!!task.choices[0] &&
                  (task.choices[0].text.length <= 0 ||
                    task.choices[0].text.length > 20))
              }
              isValid={
                !!task.choices &&
                task.choices.length === 4 &&
                !!task.choices[0] &&
                task.choices[0].text.length > 0 &&
                task.choices[0].text.length <= 20
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {!!task.choices[0] && task.choices[0].text.length > 20
                ? "Túl hosszú szöveg"
                : "Kötelező kitölteni"}
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-danger"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={1}
              defaultChecked={
                task.solution !== "" && task.solution === `${choice1Id}`
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
                task.choices.length !== 4 ||
                (!!task.choices[1] &&
                  (task.choices[1].text.length <= 0 ||
                    task.choices[1].text.length > 20))
              }
              isValid={
                !!task.choices &&
                task.choices.length === 4 &&
                !!task.choices[1] &&
                task.choices[1].text.length > 0 &&
                task.choices[1].text.length <= 20
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {!!task.choices[1] && task.choices[1].text.length > 20
                ? "Túl hosszú szöveg"
                : "Kötelező kitölteni"}
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-warning"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={2}
              defaultChecked={
                task.solution !== "" && task.solution === `${choice2Id}`
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
                task.choices.length !== 4 ||
                (!!task.choices[2] &&
                  (task.choices[2].text.length <= 0 ||
                    task.choices[2].text.length > 20))
              }
              isValid={
                !!task.choices &&
                task.choices.length === 4 &&
                !!task.choices[2] &&
                task.choices[2].text.length > 0 &&
                task.choices[2].text.length <= 20
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {!!task.choices[2] && task.choices[2].text.length > 20
                ? "Túl hosszú szöveg"
                : "Kötelező kitölteni"}
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-success"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={3}
              defaultChecked={
                task.solution !== "" && task.solution === `${choice3Id}`
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
                task.choices.length !== 4 ||
                (!!task.choices[3] &&
                  (task.choices[3].text.length <= 0 ||
                    task.choices[3].text.length > 20))
              }
              isValid={
                !!task.choices &&
                task.choices.length === 4 &&
                !!task.choices[3] &&
                task.choices[3].text.length > 0 &&
                task.choices[3].text.length <= 20
              }
            />
            <Form.Control.Feedback>Megfelelő</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {!!task.choices[3] && task.choices[3].text.length > 20
                ? "Túl hosszú szöveg"
                : "Kötelező kitölteni"}
            </Form.Control.Feedback>
          </InputGroup>
        </div>
      }
      {!solutionOneChoice && (
        <span style={{ color: "red" }}>
          Kérlek választ ki a helyes választ!
        </span>
      )}
    </>
  );
}
