import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";

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
    <div>
      <div className="nav-bg">
        <ul className="nav nav-tabs font-sizing">
          <li className="nav-item">
            <Link
              className="nav-link font-black"
              aria-current="page"
              to="/home"
            >
              Hem
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link font-black"
              aria-current="page"
              to="/info"
            >
              Information
            </Link>
          </li>
          <li className="nav-item flex-end ml-0 mr-auto">
            <Link className="nav-link btn-hover-red" onClick={onLogout}>
              <FaSignOutAlt style={{ color: "black" }} /> Logga Ut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
