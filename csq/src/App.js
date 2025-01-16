import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLecturer from "./components/AddLecturer";
import Sidebar from "./components/Sidebar";
import LoginSignup from "./components/LoginSignup";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/add-lecturer" element={<AddLecturer />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
