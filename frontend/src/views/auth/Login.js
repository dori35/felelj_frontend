import { useState } from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/auth/actions";

export function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      await dispatch(login(identifier, password));
    } catch (error) {
      setError(error.message);
    }
    navigate("/mytests");
  };

  const handleClick = async (e) => {
    navigate("/registration");
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
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <Card.Title className="fw-bold text-uppercase">
                        Bejelentkezés
                      </Card.Title>
                      <p className="text-white-50 mb-5">
                        Kérlek add meg a neptun-kódodat és a jelszavadat!
                      </p>

                      <Form.Group
                        className="form-outline form-white mb-4"
                        controlId="formGroup01"
                      >
                        <Form.Control
                          required
                          value={identifier}
                          onChange={(e) => setIdentifier(e.target.value)}
                          type="text"
                        />
                        <Form.Label>Neptun-kód</Form.Label>
                      </Form.Group>

                      <Form.Group
                        className="form-outline form-white mb-4"
                        controlId="formGroup02"
                      >
                        <Form.Control
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                        />
                        <Form.Label className="form-label">Jelszó</Form.Label>
                      </Form.Group>

                      <Button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Belépés
                      </Button>
                    </div>
                    {error && <div>{error}</div>}
                    <div>
                      <p className="mb-0">
                        Nincs még fiókod?{" "}
                        <Button onClick={handleClick}>Regisztrálj</Button>
                      </p>
                    </div>
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
