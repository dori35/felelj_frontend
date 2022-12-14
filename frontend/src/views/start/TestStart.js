import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { startTheTest } from "../../state/startTest/actions";
import QRCode from "react-qr-code";
import md5 from "md5";

export function TestStart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [error, setError] = useState(false);
  const { createdTestId } = useParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const current = new Date();
    setUrl(md5(`${current + createdTestId}`));
  }, [dispatch, createdTestId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hours = time.substring(0, 2);
    const minutes = time.substring(3, 5);
    const date = new Date();
    if (
      Number(hours) < date.getHours() ||
      (Number(hours) === date.getHours() &&
        Number(minutes) <= date.getMinutes())
    ) {
      setError(true);
      return;
    }
    if (url === "" || time === "") {
      setError(true);
      return;
    }
    setError(false);
    dispatch(startTheTest(createdTestId, url, time));
    navigate("/");
  };

  return (
    <>
      {url && (
        <div className="d-flex justify-content-center align-items-center">
          <Container className="py-5">
            <div className="d-flex justify-content-center">
              <Card>
                <Card.Header>Teszt linkje</Card.Header>
                <Card.Body>
                  <p className="mb-3 text-black-50 ">
                    Másold ki a linket és oszd meg a tesztet írókkal vagy
                    szkenneltesd be a QR-kódot!
                  </p>
                  {url && <span>{`http://localhost:3000/start/${url}`}</span>}
                  <Button
                    className="mx-5"
                    variant="dark"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `http://localhost:3000/start/${url}`
                      )
                    }
                  >
                    Másol
                  </Button>

                  <hr />
                  <div style={{ alignItems: "center" }} className="my-3">
                    <QRCode
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        align: "center",
                      }}
                      value={`http://localhost:3000/${url}`}
                    />
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Row className="my-4 ">
                      <Col>
                        <Form.Group controlId="duedate">
                          <Form.Control
                            type="time"
                            name="formTime"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <div>
                          <Button
                            className="btn btn-success "
                            type="submit"
                            disabled={url === "" || time === ""}
                          >
                            Ok
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    {error && (
                      <div style={{ color: "red" }}>
                        Valami hiba történt! (Csak a jelenleginél később
                        időponton lehet tesztet íratni!)
                      </div>
                    )}
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
