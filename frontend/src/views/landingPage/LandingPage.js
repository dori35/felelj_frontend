import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <Container className="py-5">
          <div className="d-flex justify-content-center">
            <Card className="alma">
              <Card.Body>
                <Card.Title> Eremények</Card.Title>
                <Card.Text className=" pt-4 pb-0 mb-0">
                  A Te pontszámod: <span style={{ fontWeight: "bold" }}>2</span>
                </Card.Text>
                <Card.Text className=" pt-1 ">
                  Maximum pontszám:
                  <span style={{ fontWeight: "bold" }}>2</span>
                </Card.Text>
                <Col className="  pb-4 ">
                  <Row>
                    <Col className="  mxy-0 px-0 mt-3 text-center  ">
                      <span
                        style={{ fontWeight: "bold" }}
                        className=" align-items-center"
                      >
                        2.
                      </span>
                      <Col className=" mxy-0 pxy-0 pb-2  bg-warning  ">
                        <DropdownButton
                          variant="warning"
                          menuVariant="dark"
                          id="second"
                          title="14 pont"
                        >
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Col>
                    <Col className=" mxy-0 px-0 mt-2 text-center">
                      <span
                        style={{ fontWeight: "bold" }}
                        className=" align-items-center"
                      >
                        1.
                      </span>
                      <Col className=" mxy-0 pxy-0 pb-3 bg-warning  ">
                        <DropdownButton
                          variant="warning"
                          menuVariant="dark"
                          id="first"
                          title="100 pont"
                        >
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>{" "}
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                        </DropdownButton>
                      </Col>
                    </Col>
                    <Col className=" mxy-0 px-0 mt-4 text-center">
                      <span
                        style={{ fontWeight: "bold" }}
                        className=" align-items-center"
                      >
                        3.
                      </span>
                      <Col className=" mxy-0 pxy-0 bg-warning ">
                        <DropdownButton
                          variant="warning"
                          menuVariant="dark"
                          id="third"
                          title="2 pont"
                        >
                          <Dropdown.Item>Karcsi</Dropdown.Item>
                          <Dropdown.Item>Pisti</Dropdown.Item>
                          <Dropdown.Item>Mariska</Dropdown.Item>
                          <Dropdown.Item>Liza</Dropdown.Item>
                        </DropdownButton>
                      </Col>{" "}
                    </Col>
                  </Row>
                </Col>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
