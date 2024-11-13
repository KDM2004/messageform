const FormData = require("../models/FormData");

exports.submitForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    const formData = new FormData({ username, email, message });
    await formData.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
};
