import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo_transparent.png";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../state/auth/selectors";

export function Menu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Navbar bg="transpaent " expand="lg">
      <Container>
        <Navbar.Brand href="#" className="p-0 ">
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>
      </Container>
      <Navbar.Collapse
        className="collapse w-100 order-3 dual-collapse2"
        id="basic-navbar-nav"
      >
        {isLoggedIn && (
          <Nav className="ml-auto">
            <Nav.Link
              className="text-uppercase font-weight-bold text-dark border-left border-secondary align-middle"
              href="#"
              style={{ textAlign: "center", padding: "0px 30px" }}
            >
              Új teszt
            </Nav.Link>
            <Nav.Link
              className=" text-uppercase font-weight-bold text-dark border-left border-secondary align-middle"
              href="#"
              style={{ textAlign: "center", padding: "0px 30px" }}
            >
              Létrehozott tesztek
            </Nav.Link>
            <Nav.Link
              className=" text-uppercase font-weight-bold text-dark border-left border-secondary"
              href="#"
              style={{ textAlign: "center", padding: "0px 30px" }}
            >
              Kitöltött tesztek
            </Nav.Link>
            <Nav.Link
              className=" text-uppercase font-weight-bold text-dark border-left border-secondary align-middle"
              href="#"
              style={{ textAlign: "center", padding: "0px 30px" }}
            >
              Profil
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
