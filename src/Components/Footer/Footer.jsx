import "./footer.css";
import logo from './logo_blue-removebg-preview.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import Announcements from "../Annoucements/Announcements";
  


function Footer() {

  const year = new Date().getFullYear();
  return (
    <>
    {/* <Announcements/> */}
    <div className="footersmp">
    <div class="container ">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
    <div class="col mb-3 text-center footerContainer">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
      <img
            src={logo}
            style={{ height: "90px" }}
            href="https://smp.gymkhana.iitb.ac.in/"
            className="footer-img"
            alt="smp logo"
          />
      </a>
      <h6 class="pb-4 m-0" style={{color:"#142749"}}>Learning. Growing. Becoming</h6>
      <p class="text-body-secondary">© SMP {year}</p>
    </div>

    <div class="col mb-2">

    </div>

    <div class="col mb-3">
      <h5>Navigate</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Incoming Students</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Academics</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Life at IITB</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Extracurriculars</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About Us</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Quick links</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Curriculum</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Accomodation</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Scholarships</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Fee Structure</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Departments</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Quick links</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Gymkhana</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Culturals</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Media</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sports</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Institute Bodies</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Technical Affairs</a></li>
      </ul>
    </div>
  </footer>
  <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top border-black">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">Made with ❤️ SMP Web Team</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="m-3"><a class="text-body-secondary" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li class="m-3"><a class="text-body-secondary" href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
      <li class="m-3"><a class="text-body-secondary" href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
    </ul>
  </footer>
</div>
</div>

</div>
</>
  );
}

export default Footer;
