import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import "./signupPageNavbar.css";

 export const GalleryPageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="signupPageNavbar-Container">
      {/* <img src={logo} alt = "moonbeam logo" /> */}
      <div className="signupPageNavbar-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="signUpNavbar-Nav">
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
        <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/signinPage"
            >
                Sign in
            </Link>
        </span>    
      </div>
    </div>
   )
}