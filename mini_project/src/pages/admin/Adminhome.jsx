import React, { useState, useEffect } from "react";
import Asidebar from "../sidebar/Asidebar"; // Import the Asidebar component
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Adminhome.css"; // Import the CSS file for Adminhome
import Header from "../Header/Header";
function Adminhome() {
  const [adminName, setAdminName] = useState("");
  const [systemOverview, setSystemOverview] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch admin name, system overview, and recent activities from the backend
    setAdminName("Admin User"); // Replace with API call
    setSystemOverview({
      totalStudents: 150,
      totalBacklogs: 45,
      resolvedIssues: 12,
    });
    setRecentActivities([
      "Uploaded results for CSE101.",
      "Resolved issue for Student ID: 12345.",
    ]);
  }, []);

  return (
    <div className="admin-container">
      <Header/>
      <Asidebar /> {/* Sidebar */}
      <div className="main-content">
        {/* Welcome Message */}
        <div className="welcome-message">
          <h2>Welcome, {adminName}!</h2>
          <p>Here's a quick overview of the system's performance.</p>
        </div>

        {/* System Overview */}
        <div className="system-overview">
          <div className="overview-card">
            <h3>Total Students</h3>
            <p>{systemOverview.totalStudents}</p>
          </div>
          <div className="overview-card">
            <h3>Total Backlogs</h3>
            <p>{systemOverview.totalBacklogs}</p>
          </div>
          <div className="overview-card">
            <h3>Resolved Issues</h3>
            <p>{systemOverview.resolvedIssues}</p>
          </div>
        </div>

        {/* Student Progress Summary */}
        <div className="student-progress">
          <h3>Student Progress</h3>
          <div className="progress-card">
            <h4>Students with Backlogs</h4>
            <p>30%</p>
          </div>
          <div className="progress-card">
            <h4>Average Pass Rate</h4>
            <p>85%</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <button onClick={() => navigate("/admin/upload")}>Upload Results</button> {/* Navigate to Upload page */}
          <button onClick={() => console.log("Generate Reports")}>Generate Reports</button>
          <button onClick={() => console.log("Manage Issues")}>Manage Issues</button>
        </div>

        
       
        <br />
        {/* Visual Analytics */}
        <div className="visual-analytics">
          <h3>Backlog Trends</h3>
          {/* Add a chart component here (e.g., BarChart) */}
          <p>charts</p>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;