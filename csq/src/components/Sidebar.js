import React from "react";
import { Link } from "react-router-dom";
import "../styles/SidebarStyles.css";

import dashicon from "../components/assets/dash.png";
import homeicon from "../components/assets/home.png";
import formsicon from "../components/assets/forms.png";
import resultsicon from "../components/assets/results.png";
import facultyicon from "../components/assets/faculty.png";
import usericon from "../components/assets/name.png";
import lectureicon from "../components/assets/lecture.png";
import settingicon from "../components/assets/setting.png";
import loginicon from "../components/assets/login.png";
import addicon from "../components/assets/add.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">
            <img src={dashicon} alt="Dashboard" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/home">
            <img src={homeicon} alt="Home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/forms">
            <img src={formsicon} alt="Forms" /> Forms
          </Link>
        </li>
        <li>
          <Link to="/createform">
            <img src={resultsicon} alt="createform" /> Createform
          </Link>
        </li>
        <li>
          <Link to="/faculties">
            <img src={facultyicon} alt="Faculty" /> Faculty
          </Link>
        </li>
        <li>
          <Link to="/lecturers">
            <img src={lectureicon} alt="Lecture" /> Lecturers
          </Link>
        </li>
        <li>
          <Link to="/user-management">
            <img src={usericon} alt="User-Management" /> User Management
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <img src={settingicon} alt="Setting" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/LoginSignup">
            <img src={loginicon} alt="Login" /> Login
          </Link>
        </li>
        <li>
          <Link to="/add-lecturer">
            <img src={addicon} alt="Add-Lecturer" /> Add Lecturer
          </Link>
        </li>
      </ul>
      <div className="logout-button">
        <button onClick={() => alert("Logging out...")}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
