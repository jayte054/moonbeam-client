import { Link } from "react-router-dom";
import "./homepageNavbar.css";

 export const HomePageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="homePageNavbar-Container">
      <img src={logo} alt = "moonbeam logo" />
      <div className="homePageNavbar-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="homePageNavbar-Nav">
        
          <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                      to="/auth/homepage"
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
                  to="/auth/profilePage"
            >
                Profile
            </Link>
          </span>
          <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/"
            >
                Signout
            </Link>
          </span>
        
      </div>
    </div>
   )
}
