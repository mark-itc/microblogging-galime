import React, { useState } from "react";
import UserName from "../UserName";

import "./Navbar.css";

function Navbar(props) {
  const [userName, setUserName] = useState("Gali");

  function onUserNameChange(newUserName) {
    setUserName(newUserName);
    props.onNameChange(userName);
  }
  return (
    <div className="navbar_container">
      <ul>
        <li>
          <UserName onNameChange={onUserNameChange}></UserName>
        </li>
        <li className="user_name"> Hello, {userName}</li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
