import "./footer.css";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import Announcements from "../Annoucements/Announcements";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <Announcements/> */}
      <div className="footersmp" style={{backgroundColor:"#142749"}} >
        <div class="container " >
          <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
            <div class="col mb-3 text-center footerContainer">
              <a
                href="/"
                class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <img
                  src={logo}
                  style={{ height: "90px" }}
                  href="https://smp.gymkhana.iitb.ac.in/"
                  className="footer-img"
                  alt="smp logo"
                />
              </a>
              <h6 class="pb-4 m-0" style={{ color: "#E1F7F5" }}>
                Learning. Growing. Becoming
              </h6>
              <p class="">© SMP {year}</p>
            </div>

            <div class="col mb-2"></div>

            <div class="col mb-3">
              <h5>Navigate</h5>
              <ul
                class="nav flex-column footerItems"
                style={{ color: "E1F7F5" }}
              >
                <li class="nav-item mb-2" style={{ color: "E1F7F5" }}>
                  <a href="#" class="nav-link p-0" style={{ color: "E1F7F5" }}>
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Incoming Students
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Academics
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Life at IITB
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Extracurriculars
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div class="col mb-3">
              <h5>Quick links</h5>
              <ul class="nav flex-column footerItems">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Curriculum
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Accomodation
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Scholarships
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Fee Structure
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Departments
                  </a>
                </li>
              </ul>
            </div>

            <div class="col mb-3">
              <h5>Quick links</h5>
              <ul class="nav flex-column footerItems">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Gymkhana
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Culturals
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Media
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Sports
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Institute Bodies
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Technical Affairs
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top border-black">
              <div class="col-md-4 d-flex align-items-center">
                <a
                  href="/"
                  class="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
                >
                  <svg class="bi" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                  </svg>
                </a>
                <span class="mb-3 mb-md-0 ">Made with ❤️ SMP Web Team</span>
              </div>

              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex footerItems">
                <li class="m-3">
                  <a class="" href="https://www.instagram.com/smp.iitb/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li class="m-3">
                  <a class="" href="https://www.facebook.com/smpiitb">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
                <li class="m-3">
                  <a class="" href="">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
