import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { logout, reset } from "../features/auth/authSlice";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="headerr">
      <div className="">
        <h1 className="name">Douglas & Lisa Vigsel 2023</h1>
      </div>

      <div className="mr-0 ml-auto">
        <ul>
          <li>
            <a>
              <button className="logoutBtn" onClick={onLogout}>
                <div>
                  <FaSignOutAlt /> Logga Ut
                </div>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
