import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; 
import "../styles/AddLecturer.css"; // External CSS for better styling

const AddLecturer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [staffId, setStaffId] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!firstName || !lastName || !email || !faculty || !department || !phone || !birthday || !joinDate || !staffId) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("faculty", faculty);
    formData.append("department", department);
    formData.append("phone", phone);
    formData.append("birthday", birthday);
    formData.append("joinDate", joinDate);
    formData.append("staffId", staffId);
    formData.append("profilePicture", profilePicture);

    axios
      .post("http://localhost:5000/add-lecturer", formData)
      .then((response) => {
        alert("Lecturer added successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setFaculty("");
        setDepartment("");
        setPhone("");
        setBirthday("");
        setJoinDate("");
        setStaffId("");
        setProfilePicture(null);
      })
      .catch((error) => {
        console.error("Error adding lecturer:", error);
        alert("Failed to add lecturer.");
      });
  };

  return (
    <div className="add-lecturer-page">
       <Sidebar />
       
      
      <div className="form-container">
        <h1>Add New Lecturer</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-section">
            {/* Left Section */}
            <div className="form-left">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Faculty:</label>
                <select value={faculty} onChange={(e) => setFaculty(e.target.value)} required>
                  <option value="">Select Faculty</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Science">Science</option>
                  <option value="Business">Business</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
              <div className="form-group">
                <label>Department:</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>

            {/* Right Section */}
            <div className="form-right">
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Birthday:</label>
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Join Date:</label>
                <input
                  type="date"
                  value={joinDate}
                  onChange={(e) => setJoinDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Staff ID:</label>
                <input
                  type="text"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Profile Picture:</label>
                <input type="file" onChange={handleFileChange} accept="image/*" />
              </div>
              <div className="form-buttons">
                <button type="submit" className="add-btn">
                  Add Lecturer
                </button>
                <button type="reset" className="remove-btn" onClick={() => alert("Remove functionality coming soon!")}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default AddLecturer;
