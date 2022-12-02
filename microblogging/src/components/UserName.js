import React, { useState, useEffect } from "react";

function UserName(props) {
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
    props.onNameChange(userName);
    setisNeedToChangeName(false);
  }

  function onclickHandler() {
    setisNeedToChangeName(true);
  }
  console.log("props", props);

  return (
    <div>
      {isNeedToChangeName && (
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="user_name">User Name</label>
          <input id="user_name" onChange={onChangeHandler} required />
          <button>Change</button>
        </form>
      )}
      {!isNeedToChangeName && (
        <button onClick={onclickHandler}>Change User</button>
      )}
    </div>
  );
}

export default UserName;
