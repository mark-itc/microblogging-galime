import React from "react";
import styles from "./Profile.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
// import "./Profile.css";

function Profile() {
  const { user } = useAuthContext();

  return (
    <form className={styles["profile-form"]}>
      <h2>profile</h2>
      <img
        src={user.photoURL}
        alt="user profile picture"
        className="profile picture"
      ></img>
      <label>
        <span>User Name:</span>
        <input
          className="User_name_content"
          value={user.displayName}
          required
        />
      </label>
    </form>
  );
}
export default Profile;
