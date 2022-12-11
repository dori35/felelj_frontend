import { useState } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";

export function TypeTrueFalse({ task, index, modifyTask }) {
  const base = () => {
    modifyTask({ solutionTrueFalse: task.solution });
    return task.solution;
  };
  const [solutionTrueFalse, setSolutionTrueFalse] = useState(
    task.solution ? base : ""
  );
  const handleCheckSolution = (e) => {
    setSolutionTrueFalse(e.target.value);
    modifyTask({ solutionTrueFalse: e.target.value });
  };
  return (
    <div as={Col}>
      <InputGroup className="mb-3">
        <Button variant="success" disabled>
          Igaz
        </Button>
        <InputGroup.Checkbox
          className="bg-success checkbox-group"
          aria-label="Checkbox for true solution"
          name={`solution-${index}`}
          type="radio"
          id={`solutionTrue-${index}`}
          value={1}
          defaultChecked={task.solution === "1"}
          onChange={(e) => handleCheckSolution(e)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Button variant="danger" disabled>
          Hamis
        </Button>
        <InputGroup.Checkbox
          className="bg-danger checkbox-group "
          aria-label="Checkbox for false solution"
          name={`solution-${index}`}
          id={`solutionFalse-${index}`}
          value={0}
          type="radio"
          defaultChecked={task.solution === "0"}
          onChange={(e) => handleCheckSolution(e)}
        />
      </InputGroup>
      {!solutionTrueFalse && (
        <span style={{ color: "red" }}>
          Kérlek választ ki a helyes választ!
        </span>
      )}
    </div>
  );
}
