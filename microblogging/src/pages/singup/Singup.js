import React, { useState } from "react";
import { useSingup } from "../../hooks/useSingup";
import styles from "./Singup.module.css";

export default function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDesplayName] = useState("");
  const { singup, isPending, error } = useSingup();

  function handelSubmit(e) {
    e.preventDefault();
    singup(email, password, displayName);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
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
      {!isPending && <button className="btn">Singup</button>}
      {error && <p>{error}</p>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
    </form>
  );
}
