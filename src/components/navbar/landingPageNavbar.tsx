 import { Link } from "react-router-dom";
import "./landingPageNavbar.css";

 export const LandingPageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="landingPageNavbar-Container">
      <img src={logo} alt = "moonbeam logo" />
      <div className="landingPageNavbar-Title">
        <span>
          MOONBEAM CAKES
        </span>
      </div>
      <div className="landingPageNavbar-Nav">
        
          <span><Link to="/">Home</Link></span>
          <span>Quick Order</span>
          <span><Link to="/signUpPage">Sign Up</Link></span>
          <span><Link to="/signinPage">Sign in</Link></span>
        
      </div>
    </div>
   )
}