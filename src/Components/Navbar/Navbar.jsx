import React from 'react';
import './navbar.css'; // Make sure to style your navbar as needed
import logo from '../../assets/logo_dark.svg';
const Navbar = () => {
  return (
    <div className="navbarsmp">
    <div><img
            src={logo}
            style={{ height: "60px", padding: "20px" }}
            href="https://smp.gymkhana.iitb.ac.in/"
            alt="smp logo"
          /></div>
    <div className="navContainer">
      <div className="navItem active">Home</div>
      <div className="navItem">About Us</div>
      <div className="navItem">Academics</div>
      <div className="navItem">Extra Curriculars</div>
      <div className="navItem">Incoming Students</div>
      <div className="navItem">Life at IITB</div>
    </div>
  </div>
  );
};

export default Navbar;




