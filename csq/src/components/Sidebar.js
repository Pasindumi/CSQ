import React from "react";
import { Link } from "react-router-dom";
import "../styles/SidebarStyles.css"; // Add your sidebar styles here

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/faculties">Faculties</Link>
        </li>
        <li>
          <Link to="/lecturers">Lecturers</Link>
        </li>
        <li>
          <Link to="/user-management">User Management</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
  <Link to="/add-lecturer">Add Lecturer</Link>
</li>
      </ul>
      <div className="logout-button">
        <button onClick={() => alert("Logging out...")}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
