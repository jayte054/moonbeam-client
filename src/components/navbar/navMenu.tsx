import { Link } from 'react-router-dom';
import './navMenu.css'

export const NavMenu = ({showMenu, setShowMenu, toggleMenu}: any) => {

    return (
      <div className="nav-menu-container">
        <div className='nav-menu-list'>
          <span>
            <Link
              style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </span>
          <span>
            <Link
              style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
              to="/galleryPage"
            >
              Gallery
            </Link>
          </span>
          <span>
            <Link
              style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
              to="/signUpPage"
            >
              Sign Up
            </Link>
          </span>
          <span>
            <Link
              style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
              to="/signinPage"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    );
}