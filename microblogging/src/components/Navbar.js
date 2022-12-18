import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLogout } from "../hooks/useLogout";
import { authContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useContext(authContext);
  console.log("user", user);

  return (
    <nav className={styles.navbar}>
      <ul className="ul_nav">
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/singup">Singup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Profile">Profile</NavLink>
            </li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
