import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { CreateTweetContextPropvider } from "./context/CreatTweetContext"

import "./App.css";
import "./UI/Navbar.css";

import UserName from "./UI/UserName";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App(props) {
  return (
    <CreateTweetContextPropvider className="App">
      <BrowserRouter>
        <div className="navbar_container">
          <nav>
            <ul className="ul_nav">
              <li>
                <UserName></UserName>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Profile">Profile</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      ;
    </CreateTweetContextPropvider>
  );
}

export default App;
