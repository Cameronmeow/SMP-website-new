import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import Header from "../../Components/Header/Header";
import Date from "../../Components/Date/Date";
import Footer from "../../Components/Footer/Footer";
// import bg from "../../Components/Header/header_bg.png";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Date />
      <Footer/>
    </div>
  );
}
export default Home;

// import "./navbar.css"; // Make sure to style your navbar as needed
