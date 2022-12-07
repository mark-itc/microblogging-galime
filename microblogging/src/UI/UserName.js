import React, { useState, useEffect } from "react";
import "./UserName.css";

function UserName() {
  const [userName, setUserName] = useState("Gali");
  const [isNeedToChangeName, setisNeedToChangeName] = useState(false);

  function onChangeHandler(event) {
    setUserName(event.target.value);
  }

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();
    setUserName(userName);
    localStorage.setItem("userName", userName);
    setisNeedToChangeName(false);
  }

  function onclickHandler() {
    setisNeedToChangeName(true);
  }

  return (
    <div className="user_container">
      {isNeedToChangeName && (
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="user_name">User Name</label>
          <input id="user_name" onChange={onChangeHandler} required />
          <button className="change_userName_btn">Change</button>
        </form>
      )}
      {!isNeedToChangeName && (
        <div>
          <div className="user_name_nav"> Hello, {userName}</div>
          <button onClick={onclickHandler} className="change_userName_btn">
            Change User
          </button>
        </div>
      )}
    </div>
  );
}

export default UserName;
