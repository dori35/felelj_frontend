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
      await dispatch(signup(name, password, identifier, email, role));
      console.log("elkuldte");
      navigate("/login");
    } catch (error) {}
  };

  const handleChange = (e) => {
    if (e.target.value === "teacher") {
      setRole("TEACHER");
    } else {
      setRole("STUDENT");
    }
  };

  return (
    <div>
      <Container className="py-5">
        <div className="row d-flex justify-content-center align-items-center ">
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="name">
                      <Form.Label>Teljes név</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <Form.Control.Feedback>ok</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="identifierUserName">
                      <Form.Label>Neptun-kód</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(e) => setIdentifier(e.target.value)}
                      />
                      <Form.Control.Feedback>ok</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="email">
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
                    <Form.Group as={Col} md="4" controlId="role">
                      <Form.Label>Ki Ön?</Form.Label>{" "}
                      <Form.Check
                        label="Oktató"
                        name="role"
                        type="radio"
                        value="teacher"
                        id={`teacher`}
                        defaultChecked
                        onChange={(e) => handleChange(e)}
                      />
                      <Form.Check
                        label="Diák"
                        name="role"
                        type="radio"
                        value="student"
                        id={`student`}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="passworld1">
                      <Form.Label>Jelszó</Form.Label>
                      <Form.Control
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Form.Control.Feedback>ok</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="passworld2">
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
    </div>
  );
}
