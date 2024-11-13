import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = ({ setStatus }) => {
  const [formData, setFormData] = useState({ username: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/submit", formData);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Contact Us</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
