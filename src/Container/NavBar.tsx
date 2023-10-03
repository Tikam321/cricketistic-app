import { Link } from "react-router-dom";
import '../assets/css/global.css';
const NavBar = () => {
    return (
      <>
      <div className="sticky">
         <ul className="main-navbar"> 
            <div className="mainHeader">
                <li>
            <Link  to="/">
              CRICKPEDIA
            </Link>
            </li>
            </div>
            <li>
            <Link  to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link  to="#NavBar">
              Sign In
            </Link>
          </li>
          <li>
            <Link  to="/">
              NavBar
            </Link>
          </li>
          <li>
            <Link to="/news">Latest News</Link>
          </li>
          <li>
          <Link to="/scoreBoard">Current Scores</Link>
          </li>
          <li>
          <Link to="/ranking">Ranking</Link>
          </li>
        </ul>
        </div>
      </>
    );
}

export default NavBar;