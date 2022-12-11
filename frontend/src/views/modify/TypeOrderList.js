import { useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export function TypeOrderList({ task, index, modifyTask }) {
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
  return (
    <>
      {
        <div as={Col}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroupPrepend">1.</InputGroup.Text>
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
            <InputGroup.Text id="inputGroupPrepend">2.</InputGroup.Text>

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
            <InputGroup.Text id="inputGroupPrepend">3.</InputGroup.Text>
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
            <InputGroup.Text id="inputGroupPrepend">4.</InputGroup.Text>
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
    </>
  );
}
