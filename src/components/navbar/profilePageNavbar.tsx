import React from "react";
import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import "./profilePageNavbar.css";

 export const ProfilePageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
    const {signOut} = userStore

    const handleSignout = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        await signOut()
        document.location.href = "/"

    }
   return (
     <div className="profilePageNavbar-Container">
       {/* <img src={logo} alt = "moonbeam logo" className="moonbeam-logo"/> */}
       <div className="profilePageNavbar-Title">
         <span>MOONBEAM CAKES</span>
       </div>
       <div className="profilePageNavbar-Nav">
         <span>
           <Link
             style={{ color: "white", textDecoration: "none" }}
             to="/auth/homepage"
           >
             Home
           </Link>
         </span>
         <span>
           <Link
             style={{ color: "white", textDecoration: "none" }}
             to="/auth/galleryPage"
           >
             Gallery
           </Link>
         </span>
         <span>
           <Link
             style={{ color: "white", textDecoration: "none" }}
             to="/auth/ordersPage"
           >
             Orders
           </Link>
         </span>
         {/* <span>
            <Link style={{color:"white", textDecoration:"none"}} 
                  to="/auth/profilePage"
            >
                Profile
            </Link>
          </span> */}
         <span onClick={(e) => handleSignout(e)}>
           <Link style={{ color: "white", textDecoration: "none" }} to="/">
             Signout
           </Link>
         </span>
       </div>
     </div>
   );
}
