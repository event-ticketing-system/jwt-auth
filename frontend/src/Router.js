import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import "./styles.css"; // Import the styles

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <h1 className="app-title">User Portal</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
