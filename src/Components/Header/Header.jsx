import "./header.css";
import bg from "./bg.jpg";
function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`, // Use backticks for string interpolation
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="headersmp" style={backgroundStyle}>
      <div className="headersmpContainer" style={{padding:"20px"}}>
        <div className="headersmpText">
          <h1 >Welcome To IIT Bombay!</h1>
          <h3 style={{fontSize:"20px"}}>
            This website has been created by the Student Mentor Program to
            introduce incoming freshers to life at IIT Bombay. We encourage you
            to browse through the various sections and make an informed choice
            about your college and department. Though we've tried to cover most
            questions on this website, feel free to mail us at{" "}
            <a href="mailto:ismp@iitb.ac.in" style={{ color: "white" }}>
              ismp[at]iitb[dot]ac[dot]in
            </a>{" "}
            for any queries you may have.
          </h3>
        </div>
        <div className="headersmpBtn">
        <button class="btnsmp" type="button">
            <span class="circlesmp"></span>
            <span class="arrowsmp"></span>
            <span class="textsmp">Learn more</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}
export default Header;
