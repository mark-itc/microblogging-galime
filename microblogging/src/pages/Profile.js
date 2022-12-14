import React, { useEffect, useContext } from "react";
import { createTweetContext } from "../context/CreatTweetContext";

import "./Profile.css";

function Profile() {
  const { userName, ChangeUserName } = useContext(createTweetContext);

  useEffect(() => {
    ChangeUserName(userName);
  }, [userName]);


  function onChangeHandler(event) {
    ChangeUserName(event.target.value);
  }

  useEffect(() => {
    ChangeUserName(localStorage.getItem("userName"));
  }, []);

  function onclickHandler() {
    ChangeUserName(userName);
    localStorage.setItem("userName", userName);
    console.log("userName", userName);
    

  }

  return (
    <div className="App">
      <div className="profile_container">
        <div>
        <div className="profile_headline">profile</div>
        <div className="User_headline" >User Name</div>
        <input className="User_name_content" value={userName} contenteditable="true" onChange={onChangeHandler} required/>
        <div> 
          <button  onClick={onclickHandler} className="change_userName_btn">
            Save
          </button>
        </div>
      </div>


    </div>
    </div>
  );
}
export default Profile;
