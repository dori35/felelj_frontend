import { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export function TypeOneChoice({ task, index, modifyTask }) {
  const [solution, setSolution] = useState(task.solution);

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

  const handleCheckSolution = (e) => {
    if (e.target.value === choice0) {
      setSolution(choice0);
      modifyTask({ solution: choice0 });
    } else if (e.target.value === choice1) {
      setSolution(choice1);
      modifyTask({ solution: choice1 });
    } else if (e.target.value === choice2) {
      setSolution(choice2);
      modifyTask({ solution: choice2 });
    } else if (e.target.value === choice3) {
      setSolution(choice3);
      modifyTask({ solution: choice3 });
    }
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
              value={choice0}
              defaultChecked={task.solution === choice0}
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              placeholder={choice0}
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
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-danger"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={choice1}
              defaultChecked={task.solution === choice1}
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              placeholder={choice1}
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
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-warning"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={choice2}
              defaultChecked={task.solution === choice2}
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              placeholder={choice2}
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
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              className="bg-success"
              aria-label="Checkbox for following text is the solution"
              name={`solution-OneChoice-${index}`}
              type="radio"
              value={choice3}
              defaultChecked={task.solution === choice3}
              onChange={(e) => handleCheckSolution(e)}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              placeholder={choice3}
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
            />
          </InputGroup>
        </div>
      }
    </>
  );
}
