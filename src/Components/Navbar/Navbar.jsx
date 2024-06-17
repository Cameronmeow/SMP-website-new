import React, { useState } from "react";
import "./navbar.css"; // Make sure to style your navbar as needed
import logo from "./logo_blue-removebg-preview.svg";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  
  const handleMouseEnter = (item) => {
    setDropdown(item);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div className="navbarsmp">
      <div>
        <img
          src={logo}
          style={{ height: "70px", padding: "10px" }} // Adjusted height to match navbar height
          href="https://smp.gymkhana.iitb.ac.in/"
          alt="smp logo"
        />
      </div>
      <div className="navContainer">
        
        <div
          className="navItem"
          onMouseEnter={() => handleMouseEnter("About Us")}
        >
          About Us
          {dropdown === "About Us" && (
            <div className="dropdownMenu" onMouseLeave={handleMouseLeave}>
              
              <div className="dropdownItem">Our Objective</div>
              <div className="dropdownItem">Mentorship</div>
              <div className="dropdownItem">ISMP</div>
              <div className="dropdownItem">English Learning Program</div>
              <div className="dropdownItem">CAT</div>
              <div className="dropdownItem">Team</div>
            </div>
          )}
        </div>
        <div
          className="navItem"
          onMouseEnter={() => handleMouseEnter("Academics")}
        >
          Academics
          {dropdown === "Academics" && (
            <div className="dropdownMenu" onMouseLeave={handleMouseLeave}>
              <div className="dropdownItem">Introduction</div>
              <div className="dropdownItem">Curriculum</div>
              <div className="dropdownItem">Departments</div>
              <div className="dropdownItem">Semester-Exchange</div>
              <div className="dropdownItem">IDDDP</div>
              <div className="dropdownItem">CPI Calculation</div>
            </div>
          )}
        </div>
        <div
          className="navItem"
          onMouseEnter={() => handleMouseEnter("Extra Curriculars")}
        >
          Extra Curriculars
          {dropdown === "Extra Curriculars" && (
            <div className="dropdownMenu" onMouseLeave={handleMouseLeave}>
              <div className="dropdownItem">Gymkhana</div>
              <div className="dropdownItem">Culturals</div>
              <div className="dropdownItem">Media</div>
              <div className="dropdownItem">Technical Affairs</div>
              <div className="dropdownItem">Institute Bodies</div>
              <div className="dropdownItem">Sports</div>
            </div>
          )}
        </div>
        <div
          className="navItem"
          onMouseEnter={() => handleMouseEnter("Incoming Students")}
        >
          Incoming Students
          {dropdown === "Incoming Students" && (
            <div className="dropdownMenu" onMouseLeave={handleMouseLeave}>
              <div className="dropdownItem">Introduction</div>
              <div className="dropdownItem">Onboarding</div>
              <div className="dropdownItem">Accommodation</div>
              <div className="dropdownItem">Scholarships</div>
              <div className="dropdownItem">Fee Structure</div>
              <div className="dropdownItem">Letter To Parents</div>
            </div>
          )}
        </div>
        <div
          className="navItem"
          onMouseEnter={() => handleMouseEnter("Life at IITB")}
        >
          Life at IITB
          {dropdown === "Life at IITB" && (
            <div className="dropdownMenu" onMouseLeave={handleMouseLeave}>
              <div className="dropdownItem">Introduction</div>
              <div className="dropdownItem">In and Around of the campus</div>
              <div className="dropdownItem">Support Available</div>
              <div className="dropdownItem">IITB Culture</div>
            </div>
          )}
        </div>










        
      </div>

      
    </div>
  );
};

export default Navbar;
