import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [userName, setUserName] = useState("You");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  });

  return (
    <div lassName="App">
      <div className="profile_container">
        <div className="profile_headline">profile</div>
        <div className="User_headline">User Name</div>
        <div className="User_name_content">{userName}</div>
      </div>
    </div>
  );
}
export default Profile;
