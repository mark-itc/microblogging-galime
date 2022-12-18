import styles from "./Login.module.css";

import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPamdidng } = useLogin();

  function handelSubmit(e) {
    e.preventDefault();

    login(email, password);
  }

  return (
    <form onSubmit={handelSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </label>
      <label>
        <span>pasword:</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </label>
      {!isPamdidng && <button className="btn">Login</button>}
      {isPamdidng && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
