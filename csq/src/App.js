import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLecturer from "./components/AddLecturer";
import Sidebar from "./components/Sidebar";
import Forms from './components/Forms';
import "./App.css"; // Add global styles here
import LoginSignup from "./components/LoginSignup";
import Navbar from "./components/navbar";
import logo from './logo.svg';
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
          </Routes>
          <Routes>
            <Route path="/Forms" element={<Forms />} />
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
