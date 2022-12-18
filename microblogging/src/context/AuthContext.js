import React, { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const authContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "IS_AUTH_READY":
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });
  useEffect(() => {
    const unSub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "IS_AUTH_READY", payload: user });
      unSub();
    });
  }, []);
  console.log("AuthContext state:", state);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
