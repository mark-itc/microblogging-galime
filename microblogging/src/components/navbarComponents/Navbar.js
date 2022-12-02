import React, { useState } from "react";
import UserName from "../UserName";

import "./Navbar.css";

function Navbar(props) {
  const [userName, setUserName] = useState("Gali");

  function onUserNameChange(newUserName) {
    console.log("props", props);
    setUserName(newUserName);
    props.onSaveName(userName);
  }
  console.log("props", props);

  return (
    <div className="navbar_container">
      <ul>
        <li>
          <UserName onNameChange={onUserNameChange} walla="stam"></UserName>
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
