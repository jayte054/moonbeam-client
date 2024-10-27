import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { userStore } from "../../stores/userStore";
import "./homepageNavbar.css";

 export const HomePageNavbar = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
    const {signOut} = userStore;
    const {admin} = useContext(AdminAuthContext)

    const handleSignout = async(e:React.SyntheticEvent) => {
        e.preventDefault()
        await signOut();
        document.location.href = "/"
    }
   return (
     <div className="homePageNavbar-Container">
       {/* <img src={logo} alt = "moonbeam logo" /> */}
       <div className="homePageNavbar-Title">
         <span>MOONBEAM CAKES</span>
       </div>
       <div className="homePageNavbar-Nav">
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
         <span>
           <Link
             style={{ color: "white", textDecoration: "none" }}
             to="/auth/profilePage"
           >
             Profile
           </Link>
         </span>
         {admin.isAdmin === true ? (
           <span>
             <Link
               style={{ color: "white", textDecoration: "none" }}
               to="/auth/adminPage"
             >
               Admin
             </Link>
           </span>
         ) : (
           " "
         )}
         <span onClick={(e) => handleSignout(e)}>
           <Link style={{ color: "white", textDecoration: "none" }} to="/">
             Signout
           </Link>
         </span>
       </div>
     </div>
   );
}
