import React, { useState, useEffect } from "react";
import Ssidebar from "../sidebar/Ssidebar"; // Import the Ssidebar component
import "./Studenthome.css"; // Import the CSS file for Studenthome

function Studenthome() {
  const [studentName, setStudentName] = useState("");
  const [backlogs, setBacklogs] = useState([]);

  useEffect(() => {
    // Fetch student name and backlogs from the backend
    setStudentName("John Doe"); // Replace with API call
    setBacklogs([
      { courseCode: "CSE101", courseName: "Introduction to CS", status: "Pending", grade: "F" },
      { courseCode: "MAT101", courseName: "Mathematics", status: "Cleared", grade: "A" },
    ]);
  }, []);

  return (
    <div className="student-container">
      <Ssidebar /> {/* Sidebar */}
      <div className="main-content">
        {/* Welcome Message */}
        <div className="welcome-message">
          <h2>Welcome back, {studentName}!</h2>
          <p>Here's a quick overview of your academic progress.</p>
        </div>

        {/* Academic Progress Summary */}
        <div className="progress-summary">
          <div className="summary-card">
            <h3>Total Backlogs</h3>
            <p>{backlogs.length}</p>
          </div>
          <div className="summary-card">
            <h3>Cleared Backlogs</h3>
            <p>{backlogs.filter((backlog) => backlog.status === "Cleared").length}</p>
          </div>
          <div className="summary-card">
            <h3>Ongoing Courses</h3>
            <p>{backlogs.filter((backlog) => backlog.status === "Pending").length}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button onClick={() => console.log("View Backlogs")}>View Backlogs</button>
          <button onClick={() => console.log("Report Issue")}>Report Issue</button>
          <button onClick={() => console.log("Access Resources")}>Access Resources</button>
        </div>

        {/* Visual Progress Tracker */}
        <div className="progress-tracker">
          <h3>Your Progress</h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(backlogs.filter((backlog) => backlog.status === "Cleared").length / backlogs.length) * 100}%`,
              }}
            ></div>
          </div>
          <p>
            {((backlogs.filter((backlog) => backlog.status === "Cleared").length / backlogs.length) * 100).toFixed(2)}% of courses cleared
          </p>
        </div>
      </div>
    </div>
  );
}

export default Studenthome;
