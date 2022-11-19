import { CardGroup } from "react-bootstrap";
import { ModifyCreatedChoice } from "./ModifyCreatedChoice";

export function ModifyCreatedChoices({ choices, type }) {
  console.log(type);
  return (
    <CardGroup>
      {" "}
      (
      {choices.map((choice) => (
        <ModifyCreatedChoice key={choice.id} choice={choice} />
      ))}
      )
    </CardGroup>
  );
}
