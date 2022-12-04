import { useState } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";

export function TypeTrueFalse({ task, index, modifyTask }) {
  const [solution, setSolution] = useState(task.solution);

  const handleCheckSolution = (e) => {
    if (e.target.value === "1") {
      setSolution("1");
      modifyTask({ solution: "1" });
      modifyTask({ choices: [] });
    } else if (e.target.value === "0") {
      setSolution("0");
      modifyTask({ solution: "0" });
      modifyTask({ choices: [] });
    }
  };
  return (
    <div as={Col}>
      <InputGroup className="mb-3">
        <Button variant="success" disabled>
          Igaz
        </Button>
        <InputGroup.Checkbox
          className="bg-success"
          aria-label="Checkbox for true solution"
          name={`solution-${index}`}
          type="radio"
          id={`solutionTrue-${index}`}
          value="1"
          defaultChecked={task.solution === 1 || task.solution === "1"}
          onChange={(e) => handleCheckSolution(e)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Button variant="danger" disabled>
          Hamis
        </Button>
        <InputGroup.Checkbox
          className="bg-danger"
          aria-label="Checkbox for false solution"
          name={`solution-${index}`}
          id={`solutionFalse-${index}`}
          value="0"
          type="radio"
          defaultChecked={task.solution === 0 || task.solution === "0"}
          onChange={(e) => handleCheckSolution(e)}
        />
      </InputGroup>
    </div>
  );
}
