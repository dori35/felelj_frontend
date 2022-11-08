import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getProfile } from "../../state/profile/selectors";
export function Profile({ onHide, onShow, show }) {
  const profile = useSelector(getProfile);
  return (
    <Modal show={show} onShow={onShow} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Profil adatai</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              Név:
            </Col>
            <Col xs={6} md={4}>
              {profile.name}
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              Neptun-kód:
            </Col>
            <Col xs={6} md={4}>
              {profile.identifier}
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              E-mail:
            </Col>
            <Col xs={6} md={4}>
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
