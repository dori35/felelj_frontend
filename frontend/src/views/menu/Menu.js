import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo_transparent.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getRoles } from "../../state/auth/selectors";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { useState } from "react";

export function Menu() {
  const [dis, setDis] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const roles = useSelector(getRoles);
  const activeKeyFunc = () => {};

  return (
    <Navbar bg="transparent" expand="lg" className="text-uppercase fw-bold ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>
        {isLoggedIn && (
          <>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              onClick={(e) => {
                setDis(!dis);
              }}
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto  my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
                defaultActiveKey={activeKeyFunc()}
              >
                {roles && roles.includes("TEACHER") && (
                  <Nav.Link
                    as={Link}
                    to="/newtest"
                    eventKey="newTest"
                    className="mx-3"
                  >
                    Új teszt
                  </Nav.Link>
                )}
                {roles && roles.includes("TEACHER") && (
                  <Nav.Link
                    as={Link}
                    to="/createdtests"
                    eventKey="createdTests"
                    className="mx-3"
                  >
                    Létrehozott tesztek
                  </Nav.Link>
                )}
                {roles && roles.includes("STUDENT") && (
                  <Nav.Link
                    as={Link}
                    to="/completedtests"
                    eventKey="completedTests"
                    className="mx-3"
                  >
                    Kitöltött tesztek
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
            <Profile dis={dis} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Navbar.Toggle
              aria-controls="navbarScroll2"
              onClick={(e) => {
                setDis(!dis);
              }}
            />
            <Navbar.Collapse id="navbarScroll2">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  to="/registration"
                  as={Link}
                  eventKey="registration"
                  className="mx-3"
                >
                  Regisztráció
                </Nav.Link>
                <Nav.Link
                  to="/login"
                  as={Link}
                  eventKey="login"
                  className="mx-3"
                >
                  Bejelentkezés
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}
