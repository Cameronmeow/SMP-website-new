import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import bg from "./bg1.jpeg";
const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    marginTop: "50px",
  };
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="aboutContainer" style={backgroundStyle}>
          <div className="aboutContent">
            <div className="aboutHeading">Introduction</div>
            <div className="aboutText">
              Welcome to the website of Student Mentor Program, IIT Bombay!
              <br />
              The main aim of this website is to acquaint you with the different
              facets of this college which you might be curious about. We hope
              this will help in making the difficult choice ahead of you and
              give you some insight into the culture at IIT Bombay from a
              student’s perspective!
              <br />
              We are the Student Mentor Programme (SMP), a programme within IIT
              Bombay, with the primary objective of enabling constructive and
              positive interaction, guidance and mentorship of junior students
              by senior students. We aim at providing a reliable and
              comprehensive support system to the student community to motivate
              them to excel in both academic and non-academic fields, and to
              make the most of their life at IIT Bombay.
              <br />
              This website has a lot of carefully curated information that we
              believe is relevant to you. Take your time to go through the
              different sections, we’ve covered various aspects of{" "}
              <a>life at IITB</a> - from <a>academics</a> to{" "}
              <a>extracurriculars</a>.
              <br />
              Before you begin exploring, we urge you to visit the official
              website of IIT Bombay which covers important official information
              for prospective students: Information for Prospective Students |
              Indian Institute of Technology Bombay
              <br />
              We hope this website gives you some clarity. In case of any doubts
              or concerns, feel free to email us on ismp@iitb.ac.in and we will
              reply to you as soon as possible. Our team is always there to
              assist you and you can visit this page to access our contact
              information.
              <br />
              Happy exploring!
              <br />
              <div className="signature">
                Warm Regards <br/>Jainesh Mehta | Ananya Srivastava | Vaibhavi Shinde{" "}
                <br />
                Overall Coordinators, Student Mentor Program, IIT Bombay
              </div>
            </div>
          </div>
        </div>
      <div className="ratio ratio-16x9 ytvideo">
        <iframe
          src="https://www.youtube.com/embed/1jYlB0xrbUw"
          title="IIT Bombay from the Air"
          allowFullscreen
        ></iframe>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
