import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../state/auth/actions";

export function Registration() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("TEACHER");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("elkuldte");
      await dispatch(signup(name, password, identifier, email, role));
      setValidated(true);
      console.log("elkuldte");
      //navigate("/");
    } catch (error) {}
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <Container className="py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <Card
                className="bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <Card.Body className="p-5 text-center">
                  {" "}
                  <Card.Title className="fw-bold text-uppercase">
                    Regisztráció
                  </Card.Title>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Teljes név</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control.Feedback>ok</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Neptun-kód</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          onChange={(e) => setIdentifier(e.target.value)}
                        />
                        <Form.Control.Feedback>ok</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>E-mail cím</Form.Label>
                        <Form.Control
                          type="email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback>ok</Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom03"
                      >
                        <Form.Label>Ki Ön?</Form.Label>{" "}
                        <Form.Check
                          label="Oktató"
                          name="group1"
                          type="radio"
                          id={`teacher`}
                          defaultChecked
                        />
                        <Form.Check
                          label="Diák"
                          name="group1"
                          type="radio"
                          id={`student`}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Jelszó</Form.Label>
                        <Form.Control
                          type="password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback>ok</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom05"
                      >
                        <Form.Label>Jelszó újra</Form.Label>
                        <Form.Control type="password" required />
                        <Form.Control.Feedback>ok</Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Button type="submit">Regisztrálok</Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
