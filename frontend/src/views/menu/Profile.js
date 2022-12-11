import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, logout } from "../../state/auth/actions";
import { getProfile } from "../../state/auth/selectors";
import { ProfileModal } from "./ProfileModal";

export function Profile() {
  const profile = useSelector(getProfile);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleClickLogOut = (e) => {
    try {
      e.preventDefault();
      dispatch(logout());
      navigate("/");
    } catch (error) {}
  };

  const handleClickProfileModal = (e) => {
    try {
      e.preventDefault();
      dispatch(fetchProfile());
      handleShow();
    } catch (error) {}
  };
  return (
    <>
      <NavDropdown
        id="navProfile"
        title="Profil"
        align="end"
        style={{ textAlign: "center", padding: "0px 30px" }}
      >
        <NavDropdown.Item onClick={handleClickProfileModal}>
          <CgProfile /> Adatok
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleClickLogOut}>
          Kijelentkezés
        </NavDropdown.Item>
      </NavDropdown>
      <ProfileModal
        show={show}
        onShow={handleShow}
        onHide={handleHide}
        profile={profile}
      />
    </>
  );
}
