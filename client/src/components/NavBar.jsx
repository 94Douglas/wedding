import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="Navbar">
      <button className="d-block mr-0 ml-auto logoutBtn" onClick={onLogout}>
        <div>
          <FaSignOutAlt /> Logga Ut
        </div>
      </button>
    </div>
  );
}

export default NavBar;
