import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, useParams } from "react-router-dom";
import md5 from "md5";
import { Button, Card, Container } from "react-bootstrap";
import QRCode from "react-qr-code";

export function TestStart() {
  const dispatch = useDispatch();
  const { createdTestId } = useParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const current = new Date();
    setUrl(md5(`${current + createdTestId}`));
  }, [dispatch, createdTestId]);

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
                  {url && <span>{`http://localhost:3000/${url}`}</span>}
                  <Button
                    className="mx-5"
                    variant="dark"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `http://localhost:3000/${url}`
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
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
