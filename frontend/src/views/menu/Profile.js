import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, logout } from "../../state/auth/actions";
import { getProfile } from "../../state/auth/selectors";
import { ProfileModal } from "./ProfileModal";
import classnames from "classnames";

export function Profile({ dis }) {
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
    e.preventDefault();
    let err = false;
    try {
      dispatch(fetchProfile());
    } catch (error) {
      console.log("error");
      err = true;
    }
    if (!err) {
      handleShow();
    }
  };
  return (
    <>
      <NavDropdown
        id="navProfile"
        title="Profil"
        align="end"
        className={classnames("fw-light", {
          "d-none": dis,
        })}
        disabled={dis}
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
