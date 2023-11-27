import { Link } from "react-router-dom";
import "./signinPageNavbar.css";

 export const SigninPageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="signinPageNavbar-Container">
      <img src={logo} alt = "moonbeam logo" />
      <div className="signinPageNavbar-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="signinNavbar-Nav">
        
          <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/"
            >
              Home
            </Link>
          </span>
          <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/galleryPage"
            >
              Gallery
            </Link>
          </span>
          <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/signupPage"
            >
              Sign Up
            </Link>
          </span>
          <span>Sign in</span>
        
      </div>
    </div>
   )
}