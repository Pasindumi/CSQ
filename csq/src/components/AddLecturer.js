import React, { useState } from "react";
import axios from "axios";
import "../styles/AddLecturer.css";


const AddLecturer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const lecturerData = { name, email, department, phone };

    axios
      .post("http://localhost:5000/add-lecturer", lecturerData)
      .then((response) => {
        alert("Lecturer added successfully!");
        setName("");
        setEmail("");
        setDepartment("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error adding lecturer:", error);
        alert("Failed to add lecturer.");
      });
  };

  return (
    <div className="add-lecturer-container">
      <div className="form-card">
        <h2>Add New Lecturer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter lecturer's name"
              className={errors.name ? "error-input" : ""}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter lecturer's email"
              className={errors.email ? "error-input" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Enter department"
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className={errors.phone ? "error-input" : ""}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <button type="submit" className="submit-btn">
            Add Lecturer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLecturer;
