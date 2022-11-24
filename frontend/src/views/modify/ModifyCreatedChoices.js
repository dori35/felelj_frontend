import { Button, Col } from "react-bootstrap";

export function ModifyCreatedChoices({ choices, type }) {
  return (
    /*<CardGroup>
      {" "}
      (
      {choices.map((choice) => (
        <ModifyCreatedChoice key={choice.id} choice={choice} />
      ))}
      )
    </CardGroup>*/

    /*<>
      {type !== "TRUE_FALSE" && (
        <CardGroup>
          <Card
            bg={"Primary".toLowerCase()}
            key="Primary"
            text={"Primary".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{choices[0].text}</Card.Title>
            </Card.Body>
          </Card>

          <Card
            bg={"Danger".toLowerCase()}
            key="Danger"
            text={"Danger".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{choices[1].text}</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg={"Warning".toLowerCase()}
            key="Warning"
            text={"Warning".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{choices[2].text}</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg={"Success".toLowerCase()}
            key="Success"
            text={"Success".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>{choices[3].text}</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      )}{" "}
      {type === "TRUE_FALSE" && (
        <CardGroup>
          <Card
            bg={"Success".toLowerCase()}
            key="Success"
            text={"Success".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>Igaz</Card.Title>
            </Card.Body>
          </Card>
          <Card
            bg={"Danger".toLowerCase()}
            key="Danger"
            text={"Danger".toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>Hamis</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      )}
    </>*/
    <>
      {type !== "TRUE_FALSE" && (
        <div as={Col}>
          <Button variant="primary">{choices[0].text}</Button>
          <Button variant="danger">{choices[1].text}</Button>
          <br /> <Button variant="warning">{choices[2].text}</Button>
          <Button variant="success">{choices[3].text}</Button>
        </div>
      )}
      {type === "TRUE_FALSE" && (
        <div>
          <Button variant="success">Igaz</Button>
          <Button variant="danger">Hamis</Button>
        </div>
      )}
    </>
  );
}
