import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo_transparent.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getRoles } from "../../state/auth/selectors";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";

export function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const roles = useSelector(getRoles);
  const activeKeyFunc = () => {};

  return (
    <Navbar className="text-uppercase fw-bold">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>
      </Container>
      <Navbar.Collapse className="mw-100 ">
        {isLoggedIn && (
          <>
            <Nav defaultActiveKey={activeKeyFunc()} className="ms-auto">
              {roles && roles.includes("TEACHER") && (
                <Nav.Link
                  as={Link}
                  to="/createTest"
                  style={{ textAlign: "center", padding: "0px 30px" }}
                  eventKey="createTest"
                >
                  Új teszt
                </Nav.Link>
              )}
              {roles && roles.includes("TEACHER") && (
                <Nav.Link
                  as={Link}
                  to="/createdtests"
                  style={{ textAlign: "center", padding: "0px 30px" }}
                  eventKey="createdTests"
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

              <Profile />
            </Nav>
          </>
        )}
        {!isLoggedIn && (
          <Nav className="ms-auto">
            <Nav.Link
              to="/registration"
              as={Link}
              style={{ textAlign: "center", padding: "0px 30px" }}
              eventKey="registration"
            >
              Regisztráció
            </Nav.Link>
            <Nav.Link
              to="/login"
              as={Link}
              style={{
                textAlign: "center",
                padding: "0px 30px",
              }}
              eventKey="login"
            >
              Bejelentkezés
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
