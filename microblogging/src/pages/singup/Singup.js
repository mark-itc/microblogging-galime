import React, { useState } from "react";
import { useSingup } from "../../hooks/useSingup";
import styles from "./Singup.module.css";

export default function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDesplayName] = useState("");
  const { singup, isPending, error } = useSingup();
  const [picture, setPicture] = useState(null);
  const [pictureError, setPictureError] = useState(null);

  function handelSubmit(e) {
    e.preventDefault();
    singup(email, password, displayName, picture);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleFileChange(e) {
    setPicture(null);
    let selectedFile = e.target.files[0];
    console.log("selectedFile", selectedFile);
    if (!selectedFile) {
      setPictureError("please select a file");
      return;
    }
    if (!selectedFile.type.includes("image")) {
      setPictureError("please select an image type file");
      return;
    }
    if (selectedFile.size > 100000) {
      setPictureError("selected image is over 100kb");
      return;
    }
    setPictureError(null);
    setPicture(selectedFile);
    console.log("picture updated");
  }

  return (
    <form className={styles["singup-form"]} onSubmit={handelSubmit}>
      <h2>Singup</h2>

      <label>
        <span>email:</span>
        <input type="email" onChange={handleEmailChange} value={email} />
      </label>
      <label>
        <span>pasword:</span>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          autoComplete="on"
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => {
            setDesplayName(e.target.value);
          }}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile Picture:</span>
        <input type="file" onChange={handleFileChange} />
      </label>
      {!isPending && <button className="btn">Singup</button>}
      {error && <p>{error}</p>}
      {pictureError && <p>{pictureError}</p>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
    </form>
  );
}
