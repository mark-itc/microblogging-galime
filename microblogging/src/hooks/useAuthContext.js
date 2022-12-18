import { authContext } from "../context/AuthContext";
import React, { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw Error("useAuthContext must be in a AuthContextProvider");
  }
  return context;
};
