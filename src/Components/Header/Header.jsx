import "./header.css";
import videoBg from "./video.mp4";

function Header() {
  return (
    <div className="headersmp">
      <video src={videoBg} autoPlay loop muted className="videobg" />
      <div className="headersmpContainer">
        <div className="headersmpText">
          <h1>Welcome To IIT Bombay!</h1>
          <h3>
            This website has been created by the Student Mentor Program to
            introduce incoming freshers to life at IIT Bombay. We encourage you
            to browse through the various sections and make an informed choice
            about your college and department. Though we've tried to cover most
            questions on this website, feel free to mail us at{" "}
            <a href="mailto:ismp@iitb.ac.in" style={{ color: "#ffc50d;"}}>
              ismp@iitb.ac.in
            </a>{" "}
            for any queries you may have.
          </h3>
        </div>
        <div className="headersmpBtn">
          <button className="btnsmp" type="button">
            <span className="circlesmp"></span>
            <span className="arrowsmp"></span>
            <span className="textsmp">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
