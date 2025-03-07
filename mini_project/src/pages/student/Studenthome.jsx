import React, { useState } from "react";
import "./Ssidebar.css"; // Import the CSS file

function Studenthome() {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <button className="accordion-header" onClick={() => handleOpen(1)}>
            📊Dashboard
            <span className={`arrow ${open === 1 ? "open" : ""}`}>&#9660;</span>
          </button>
          {open === 1 && (
            <ul className="submenu">
              <li>📈 Analytics</li>
              <li>📑 Reporting</li>
              
            </ul>
          )}
        </li>
        <li>
          <button className="accordion-header" onClick={() => handleOpen(2)}>
          ☎️ Contact
            <span className={`arrow ${open === 2 ? "open" : ""}`}>&#9660;</span>
          </button>
          {open === 2 && (
            <ul className="submenu">
              <li>ℹ️ About</li>
              <li>⚠️ Report Bugs</li>
            </ul>
          )}
        </li>
        <hr className="divider" />
        
        <li>👤 Profile</li>
        <li>⚙️ Settings</li>
        <li>🚪 Log Out</li>
      </ul>
    </div>
  );
}

export default Studenthome;
