import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import "./quickOrder.css";

 export const QuickOrderPageNav = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="quickOrder-Container">
      {/* <img src={logo} alt = "moonbeam logo" /> */}
      <div className="quickOrder-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="quickOrder-Nav">
        <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/auth/homepage"
            >
                Home
            </Link>
        </span>
       <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                      to="/auth/galleryPage"
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
                  to="/signoutPage"
            >
                Signout
            </Link>
        </span>    
      </div>
    </div>
   )
}