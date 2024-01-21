import { Link } from "react-router-dom";
import "../assets/css/global.css";
import "../assets/css/navbar.scss";
const NavBar = () => {
  return (
    <>
      <div className="sticky">
        <ul className="main-navbar">
          <div className="mainHeader">
            <li>
              <Link to="/">CRICKPEDIA</Link>
              <span className="tooltip">CRICKPEDIA</span>
            </li>
          </div>
          <li>
            <Link to="/login">Login</Link>
            <span className="tooltip">Login</span>
          </li>
          <li>
            <Link to="/signup">Sign In</Link>
            <span className="tooltip">Sign In</span>
          </li>
          <li>
            <Link to="/">NavBar</Link>
            <span className="tooltip">NavBar</span>
          </li>
          <li>
            <Link to="/news">Latest News</Link>
            <span className="tooltip">Latest News</span>
          </li>
          <li>
            <Link to="/scoreBoard">Current Scores</Link>
            <span className="tooltip">Current Scores</span>
          </li>
          <li>
            <Link to="/ranking">Ranking</Link>
            <span className="tooltip">Ranking</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
