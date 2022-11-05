import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo_transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getRoles } from "../../state/auth/selectors";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { logout } from "../../state/auth/actions";
import { useEffect, useState } from "react";

export function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const roles = useSelector(getRoles);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activeKeyFunc = () => {
    if (roles) {
      return roles.includes("TEACHER") ? "myTests" : "completedTests";
    }
    return "/";
  };

  const handleClick = (e) => {
    try {
      e.preventDefault();
      dispatch(logout());
    } catch (error) {}
  };

  return (
    <>
      <Navbar className="text-uppercase fw-bold">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand>
        </Container>
        <Navbar.Collapse className="mw-100 ">
          {isLoggedIn && (
            <Nav defaultActiveKey={activeKeyFunc()}>
              {roles && roles.includes("TEACHER") && (
                <Nav.Link
                  as={Link}
                  to="/newtest"
                  style={{ textAlign: "center", padding: "0px 30px" }}
                  eventKey="newTest"
                >
                  Új teszt
                </Nav.Link>
              )}
              {roles && roles.includes("TEACHER") && (
                <Nav.Link
                  as={Link}
                  to="/mytests"
                  style={{ textAlign: "center", padding: "0px 30px" }}
                  eventKey="myTests"
                >
                  Létrehozott tesztek
                </Nav.Link>
              )}
              {roles && roles.includes("STUDENT") && (
                <Nav.Link
                  as={Link}
                  to="/completedtests"
                  style={{ textAlign: "center", padding: "0px 30px" }}
                  eventKey="completedTests"
                >
                  Kitöltött tesztek
                </Nav.Link>
              )}

              <NavDropdown
                id="navProfile"
                title="Profil"
                align="end"
                style={{ textAlign: "center", padding: "0px 30px" }}
              >
                <NavDropdown.Item>
                  {" "}
                  <CgProfile /> Felhasználónév
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleShow}>Adatok</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleClick}>
                  Kijelentkezés
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
          {!isLoggedIn && (
            <Nav>
              <Nav.Link
                to="/registration"
                as={Link}
                style={{ textAlign: "center", padding: "0px 30px" }}
              >
                Regisztráció
              </Nav.Link>
              <Nav.Link
                to="/login"
                as={Link}
                style={{ textAlign: "center", padding: "0px 30px" }}
              >
                Bejelentkezés
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Felhasználónév</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
