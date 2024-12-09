import React from "react";
import { Link } from "react-router-dom";
import "./signupPageNavbar.css";

 export const SignUpPageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
    
   return (
     <div className="signupPageNavbar-Container">
       {/* <img src={logo} alt = "moonbeam logo" /> */}
       <div className="signupPageNavbar-Title">
         <span>MOONBEAM CAKES</span>
       </div>
       <div className="signUpNavbar-Nav">
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
             to="/signinPage"
           >
             Sign in
           </Link>
         </span>
       </div>
     </div>
   );
}