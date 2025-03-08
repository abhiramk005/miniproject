import React, { useState } from "react";
import Asidebar from "../sidebar/Asidebar"; // Import the Asidebar component
import "./Upload.css"; // Import the CSS file for styling

function Upload() {
  const [semester, setSemester] = useState("");
  const [batch, setBatch] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!semester || !batch || !file) {
      setError("Please fill all fields and select a file.");
      return;
    }

    // Handle file upload (e.g., send to backend)
    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("batch", batch);
    formData.append("file", file);

    // Example: Send formData to backend using fetch or axios
    console.log("Form Data:", { semester, batch, file });

    // Reset form
    setSemester("");
    setBatch("");
    setFile(null);
    setError("");
  };

  return (
    <div className="upload-container">
      {/* Sidebar */}
      <Asidebar activeItem="upload" /> {/* Pass the activeItem prop */}

      {/* Main Content */}
      <div className="upload-page">
        <h2>Upload Results</h2>
        <form onSubmit={handleSubmit}>
          {/* Semester Dropdown */}
          <div className="form-group">
            <label>Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
            >
              <option value="">Select Semester</option>
              <option value="Semester 1">S1</option>
              <option value="Semester 2">S2</option>
              <option value="Semester 3">S3</option>
              <option value="Semester 4">S4</option>
              <option value="Semester 5">S5</option>
              <option value="Semester 6">S6</option>
              <option value="Semester 7">S7</option>
              <option value="Semester 8">S8</option>

            </select>
          </div>

          {/* Batch Dropdown */}
          <div className="form-group">
            <label>Batch</label>
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              required
            >
              <option value="">Select Batch</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="form-group">
            <label>Upload PDF</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="error">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;