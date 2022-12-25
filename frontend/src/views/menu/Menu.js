import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo_transparent.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getRoles } from "../../state/auth/selectors";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { useEffect, useState } from "react";

export function Menu() {
  const [dis, setDis] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const roles = useSelector(getRoles);
  const [location, setLocation] = useState(window.location.pathname);

  const activeKeyFunc = (l = window.location.pathname) => {
    if (l === "/registration" || l === "/login") {
      return l;
    }

    if (l === "/newtest" || l === "/completedtests" || l === "/createdtests") {
      return l;
    }

    if (
      l.includes("/modifytest") ||
      l.includes("/results") ||
      l.includes("/trytest") ||
      l.includes("/settingstart")
    ) {
      return "/createdtests";
    }

    return "";
  };

  const [loc, setLoc] = useState(activeKeyFunc());

  useEffect(() => {
    let newLoc = activeKeyFunc(window.location.pathname);
    if (loc !== newLoc) {
      setLoc(newLoc);
    }
  }, [location]);

  return (
    <Navbar bg="transparent" expand="lg" className="text-uppercase">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={(e) => {
            setLocation("/");
          }}
        >
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
                className="ms-auto  my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
                activeKey={loc}
              >
                {roles && roles.includes("TEACHER") && (
                  <Nav.Link
                    as={Link}
                    to="/newtest"
                    eventKey="/newtest"
                    className="mx-3"
                    onClick={(e) => {
                      setLocation("/newtest");
                    }}
                  >
                    Új teszt
                  </Nav.Link>
                )}
                {roles && roles.includes("TEACHER") && (
                  <Nav.Link
                    as={Link}
                    to="/createdtests"
                    eventKey="/createdtests"
                    className="mx-3"
                    onClick={(e) => {
                      setLocation("/createdtests");
                    }}
                  >
                    Létrehozott tesztek
                  </Nav.Link>
                )}
                {roles && roles.includes("STUDENT") && (
                  <Nav.Link
                    as={Link}
                    to="/completedtests"
                    eventKey="/completedtests"
                    className="mx-3"
                    onClick={(e) => {
                      setLocation("/completedtests");
                    }}
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
                activeKey={loc}
              >
                <Nav.Link
                  to="/registration"
                  as={Link}
                  eventKey="/registration"
                  className="mx-3"
                  onClick={(e) => {
                    setLocation("/registration");
                  }}
                >
                  Regisztráció
                </Nav.Link>
                <Nav.Link
                  to="/login"
                  as={Link}
                  eventKey="/login"
                  className="mx-3"
                  onClick={(e) => {
                    setLocation("/login");
                  }}
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
