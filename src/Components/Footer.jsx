import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="Footer-container">
        <div className="Address">
          <p
            style={{
              fontSize: window.innerWidth < 768 ? "18px" : "20px",
              fontWeight: window.innerWidth > 768 ? "" : "600",
            }}
            id="name"
          >
            SmileHaven Dental Clinic
          </p>
          <div>
            <p>123, Main-Street, Hyderabad, Telangana</p>
            <p>Phone: +91-98XXX XXXXX</p>
            <p>Email: contact@smilehaven.com</p>
          </div>
        </div>
        <div className="Footer-Links">
          <ul>
            <li>
              {" "}
              <Link to="/">
                {" "}
                <i className="bi bi-chevron-double-right icons"></i>Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/about">
                {" "}
                <i className="bi bi-chevron-double-right icons"></i>About
              </Link>
            </li>
            <li>
              <Link to="/services">
                {" "}
                <i className="bi bi-chevron-double-right icons"></i>Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {" "}
                <i className="bi bi-chevron-double-right icons"></i>Contact
              </Link>
            </li>
            <li id="appointment">
              <Link to="/contact">
                <i className="bi bi-chevron-double-right icons"></i>Book
                Appointment
              </Link>
            </li>
          </ul>
        </div>
        <div className="Socail-media">
          <ul>
            <li>
              <i className="bi bi-facebook icons"></i>Facebook
            </li>
            <li>
              <i className="bi bi-instagram icons"></i>Instagram
            </li>
            <li>
              <i className="bi bi-whatsapp icons"></i>WhatsApp
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="copy-rights">
        <h6>© 2025 SmileCare Dental Clinic. All rights reserved.</h6>
      </div>
    </>
  );
}
export default Footer;
