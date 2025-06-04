import React from "react";
import "./about.css";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import bg from "./bg2.jpeg";

const About = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarLinks = [
    { text: "Introduction", url: "/about" },
    { text: "Our Mission", url: "/about/mission" },
    { text: "Our Team", url: "/about/team" },
    { text: "History", url: "/about/history" }
  ];
  return (
    <>
      <Navbar />
      <div className="about">
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <Sidebar 
          isOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar}
          heading="About Us"
          links={sidebarLinks}
        />
        <div className="aboutContainer" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" ,backgroundRepeat: "no-repeat"}}>
          <h2 className="aboutHeading">Introduction</h2>
          <div className="aboutContent">
            <p>
            
              Welcome to the website of the <b>Student Mentor Program</b>, IIT Bombay!
            
              The main aim of this website is to acquaint you with the different facets of
              this college which you might be curious about. We hope this helps in making
              the difficult choice ahead of you and gives insight into the culture at IIT
              Bombay from a student’s perspective!
            </p>
            <p>
              We are the <b>Student Mentor Programme (SMP)</b>, a program within IIT
              Bombay, with the primary objective of enabling constructive and positive
              interaction, guidance, and mentorship of junior students by senior students.
              We provide a reliable and comprehensive support system to the student
              community to motivate them to excel in both academic and non-academic
              fields, making the most of their life at IIT Bombay.
            </p>
            <p>
              This website has a lot of carefully curated information relevant to you.
              Take your time to go through different sections covering various aspects of{" "}
              <a href="/">life at IITB</a> - from <a href="/">academics</a> to{" "}
              <a href="/">extracurriculars</a>.
            </p>
            <p>
              Before you begin exploring, we urge you to visit the official website of IIT
              Bombay, which covers important official information for prospective
              students:{" "}
              <a href="/">Information for Prospective Students</a> |{" "}
              <a href="/">Indian Institute of Technology Bombay</a>.
            </p>
            <p>
              We hope this website gives you some clarity. In case of any doubts or
              concerns, feel free to email us at <a href="mailto:ismp@iitb.ac.in">ismp@iitb.ac.in</a>,
              and we will reply as soon as possible. Our team is always there to assist
              you, and you can visit <a href="/">this page</a> to access our contact
              information.
            </p>
            <p>Happy exploring!</p>

            <div className="signature">
              <strong>Warm Regards,</strong> <br />
              Jainesh Mehta | Ananya Srivastava | Vaibhavi Shinde <br />
              Overall Coordinators, Student Mentor Program, IIT Bombay
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
