import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import { useAuthContext } from "./hooks/useAuthContext";

function App(props) {
  const { user, isAuthReady } = useAuthContext();

  return (
    <div className="app">
      {!isAuthReady && <h1>Loading...</h1>}
      {isAuthReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Home />} />
                <Route path="/singup" element={<Home />} />
                <Route path="/*" element={<Home />} />
              </>
            )}

            {!user && (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
                <Route path="/*" element={<Login />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
