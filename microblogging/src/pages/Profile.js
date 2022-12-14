import React, { useEffect, useContext } from "react";
import { createTweetContext } from "../context/CreatTweetContext";

import "./Profile.css";

function Profile() {
  const { userName, ChangeUserName } = useContext(createTweetContext);

  useEffect(() => {
    ChangeUserName(userName);
  }, [userName]);

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
