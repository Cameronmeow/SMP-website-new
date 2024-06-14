import Navbar from "../../Components/Navbar/Navbar";
import React from "react";
import Header from "../../Components/Header/Header";
import Date from "../../Components/Date/Date";
// import bg from "../../Components/Header/header_bg.png";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Date />
      <section id="introduction">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading">Introduction</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="section-content">
                Welcome to the website of Student Mentor Program, IIT Bombay!
                <br />
                <br />
                The main aim of this website is to acquaint you with the
                different facets of this college which you might be curious
                about. We hope this will help in making the difficult choice
                ahead of you and give you some insight into the culture at IIT
                Bombay from a student’s perspective!
                <br />
                <br />
                We are the <b>Student Mentor Programme</b> (SMP), a programme
                within IIT Bombay, with the primary objective of enabling
                constructive and positive interaction, guidance and mentorship
                of junior students by senior students. We aim at providing a
                reliable and comprehensive support system to the student
                community to motivate them to excel in both academic and
                non-academic fields, and to make the most of their life at IIT
                Bombay.
                <br />
                <br />
                This website has a lot of carefully curated information that we
                believe is relevant to you. Take your time to go through the
                different sections, we’ve covered various aspects of{" "}
                <a
                  className="link"
                  href="https://smp.gymkhana.iitb.ac.in/life_intro.php"
                >
                  life at IITB{" "}
                </a>{" "}
                - from{" "}
                <a
                  className="link"
                  href="https://smp.gymkhana.iitb.ac.in/academics.php"
                >
                  {" "}
                  academics{" "}
                </a>{" "}
                to{" "}
                <a
                  className="link"
                  href="https://smp.gymkhana.iitb.ac.in/extra_curricular.php"
                >
                  {" "}
                  extracurriculars{" "}
                </a>
                .
                <br />
                <br />
                Before you begin exploring, we urge you to visit the official
                website of IIT Bombay which covers important official
                information for prospective students:{" "}
                <a
                  className="link"
                  href="https://www.iitb.ac.in/en/students/information-prospective-students"
                >
                  Information for Prospective Students | Indian Institute of
                  Technology Bombay
                </a>
                <br />
                <br />
                Secondly, in case of any doubts or concerns, our team is always
                there to assist you for the same and you can visit{" "}
                <a
                  className="link"
                  href="https://smp.gymkhana.iitb.ac.in/about_us.php#team"
                >
                  this page
                </a>{" "}
                to access our contact information. If you need to connect with
                us for any further queries, please feel free to use the{" "}
                <a
                  href="https://smp.gymkhana.iitb.ac.in/queries.php"
                  className="link"
                >
                  Query Portal
                </a>{" "}
                and we will reply to you as soon as possible. We hope this
                website gives you some clarity. In case of any doubts or
                concerns, feel free to email us on{" "}
                <a className="link" href="mailto:ismp@iitb.ac.in">
                  ismp@iitb.ac.in
                </a>{" "}
                and we will reply to you as soon as possible. Our team is always
                there to assist you and you can visit{" "}
                <a
                  className="link"
                  href="https://smp.gymkhana.iitb.ac.in/about_us.php#team"
                >
                  {" "}
                  this page
                </a>{" "}
                to access our contact information.
                <br />
                <br />
                Happy exploring!
                <br />
                <br />
                Warm Regards
                <br />
                <br />
                <p>
                  <b>
                    {" "}
                    Shreedhar Malpani | Sanidhya Anand | Vedika Gupta
                    <br />
                    Overall Coordinators, Student Mentor Program, IIT Bombay
                  </b>
                </p>
                <br />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1jYlB0xrbUw"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;

// import "./navbar.css"; // Make sure to style your navbar as needed
