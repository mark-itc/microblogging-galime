import React, { useEffect, useState } from "react";
import Navbar from "./navbarComponents/Navbar";
import "./Profile.css";

function Profile() {
  const [userName, setUserName] = useState("X");

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);
  console.log("userName from Profile", userName);

  return (
    <div>
      <Navbar />
      <div className="profile_container">
        <div className="profile_headline">profile</div>
        <div className="User_headline">User Name</div>
        <div className="User_name_content">{userName}</div>
      </div>
    </div>
  );
}
export default Profile;
