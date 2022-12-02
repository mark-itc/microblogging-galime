import React, { useState } from "react";
import UserName from "../UserName";

import "./Navbar.css";

function Navbar(props) {
  const [userName, setUserName] = useState("Gali");

  function onUserNameChange(newUserName) {
    setUserName(newUserName);
    props.onSaveName(userName);
  }

  return (
    <div className="navbar_container">
      <ul className="ul_nav">
        <li>
          <UserName onNameChange={onUserNameChange} walla="stam"></UserName>
        </li>
        <li className="user_name_nav"> Hello, {userName}</li>
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
