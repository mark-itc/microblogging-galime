import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTweetContextPropvider } from "./context/CreatTweetContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Singup from "./pages/singup/Singup";
import { authContext } from "./context/AuthContext";
function App(props) {
  const { user } = useContext(authContext);

  return (
    <CreateTweetContextPropvider className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          {!user && <Route path="/" element={<Login />} />}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </BrowserRouter>
      ;
    </CreateTweetContextPropvider>
  );
}

export default App;
