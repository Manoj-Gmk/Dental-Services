import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <h1>HappySmileClinic</h1>
        <div className="icons">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
