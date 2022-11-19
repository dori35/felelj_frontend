import { Card } from "react-bootstrap";

export function ModifyCreatedChoice({ choice }) {
  console.log(choice);
  return (
    <Card
      bg={"Primary".toLowerCase()}
      key="Primary"
      text={"Primary".toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-2"
    >
      <Card.Body>
        <Card.Title>{choice.text}</Card.Title>
      </Card.Body>
    </Card>
  );
}
