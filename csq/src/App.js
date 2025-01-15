import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLecturer from "./components/AddLecturer";
import Sidebar from "./components/Sidebar";
import LoginSignup from "./components/LoginSignup";
import "./App.css"; 
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <Navbar/>
        <div className="main-content">
          <Routes>
            <Route path="/add-lecturer" element={<AddLecturer />} />
          </Routes>
          <Routes>
            <Route path="/LoginSignup" element={<LoginSignup />} />
          </Routes>

          
        </div>
      </div>
    </Router>
  );
}

export default App;