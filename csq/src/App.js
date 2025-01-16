import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLecturer from "./components/AddLecturer";
import Sidebar from "./components/Sidebar";
import Forms from './components/Forms';
import "./App.css"; // Add global styles here

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/add-lecturer" element={<AddLecturer />} />
          </Routes>
          <Routes>
            <Route path="/Forms" element={<Forms />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
