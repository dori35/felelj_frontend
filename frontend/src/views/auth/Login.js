import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/auth/actions";
import { getRoles } from "../../state/auth/selectors";

export function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = useSelector(getRoles);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      await dispatch(login(identifier, password));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (roles) {
      if (roles.includes("TEACHER")) {
        navigate("/mytests");
      } else if (roles.includes("STUDENT")) {
        navigate("/completedtests");
      }
    }
  }, [navigate, roles]);

  const handleClick = async (e) => {
    navigate("/registration");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <Card className="bg-dark text-white" style={{ borderRadius: "1rem" }}>
            <Card.Body className="text-center">
              <Form onSubmit={handleSubmit}>
                <div className="pb-5 mb-md-5 mt-md-4">
                  <Card.Title className="fw-bold text-uppercase">
                    Bejelentkezés
                  </Card.Title>
                  <p className="mb-5 text-white-50">
                    Kérlek add meg a neptun-kódodat és a jelszavadat!
                  </p>

                  <Form.Group controlId="formGroup01" className="pb-3">
                    <Form.Control
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      type="text"
                    />
                    <Form.Label>Neptun-kód</Form.Label>
                  </Form.Group>

                  <Form.Group controlId="formGroup02">
                    <Form.Control
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                    <Form.Label>Jelszó</Form.Label>
                  </Form.Group>

                  <Button className="btn-lg px-5" type="submit">
                    Belépés
                  </Button>
                </div>
                {error && <div>{error}</div>}
                <div>
                  <p>
                    Nincs még fiókod?{" "}
                    <Button onClick={handleClick}>Regisztrálj</Button>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
