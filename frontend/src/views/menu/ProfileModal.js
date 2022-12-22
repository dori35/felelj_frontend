import { Button, Col, Container, Modal, Row } from "react-bootstrap";

export function ProfileModal({ show, onShow, onHide, profile }) {
  return (
    <Modal show={show} onShow={onShow} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Profil adatai</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={3} md={4} style={{ fontWeight: "bold" }}>
              {profile.role === "TEACHER" ? "TANÁR" : "DIÁK"}
            </Col>
          </Row>
          <Row>
            <Col xs={2} md={4}>
              Név:
            </Col>
            <Col xs={12} md={4}>
              {profile.name}
            </Col>
          </Row>{" "}
          <Row>
            <Col xs={7} md={4}>
              Neptun-kód:
            </Col>
            <Col xs={3} md={4}>
              {profile.identifier}
            </Col>
          </Row>{" "}
          <Row>
            <Col xs={4} md={4}>
              E-mail:
            </Col>
            <Col xs={12} md={4}>
              {profile.email}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
