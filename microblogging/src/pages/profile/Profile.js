import React, { useEffect, useContext } from "react";
import { createTweetContext } from "../../context/CreatTweetContext";
import styles from "./Profile.module.css";

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
    <form className={styles["profile-form"]}>
      <h2>profile</h2>
      <label>
        <span>User Name:</span>
        <input
          className="User_name_content"
          value={userName}
          contenteditable="true"
          onChange={onChangeHandler}
          required
        />
      </label>
      <button onClick={onclickHandler}>Save</button>
    </form>
  );
}
export default Profile;
