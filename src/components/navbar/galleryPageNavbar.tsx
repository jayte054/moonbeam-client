import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import "./galleryPageNavbar.css";

 export const GalleryPageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="galleryPageNavbar-Container">
      {/* <img src={logo} alt = "moonbeam logo" /> */}
      <div className="galleryPageNavbar-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="galleryNavbar-Nav">
        <span>
            <Link style={{color:"rgb(54, 47, 47)", textDecoration:"none"}} 
                  to="/"
            >
                Home
            </Link>
        </span>
       
        <span>
            <Link style={{color:"rgb(54, 47, 47)", textDecoration:"none"}} 
                  to="/signupPage"
            >
              Sign Up
            </Link>
          </span>
        <span>
            <Link style={{color:"rgb(54, 47, 47)", textDecoration:"none"}} 
                  to="/signinPage"
            >
                Sign in
            </Link>
        </span>    
      </div>
    </div>
   )
}