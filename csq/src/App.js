import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddLecturer from "./components/AddLecturer";
import Sidebar from "./components/Sidebar";
import Forms from './components/Forms';
<<<<<<< Updated upstream
import Createform from './components/createform';
=======
import "./App.css"; 
import LoginSignup from "./components/LoginSignup";
>>>>>>> Stashed changes
import "./App.css"; 

import "./App.css"; 

import "./App.css";

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
          <Routes>
            <Route path="/createform" element={<Createform />} />
          </Routes>
         
        </div>
      </div>
    </Router>





  );
}

export default App;
