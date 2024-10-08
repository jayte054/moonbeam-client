import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import "./galleryPageNavbar.css";
import { userStore } from "../../stores/userStore";

 export const GalleryPageNav = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
     const { signOut } = userStore;

     const handleSignout = async (e: React.SyntheticEvent) => {
       e.preventDefault();
       await signOut();
       document.location.href = "/";
     };
   return (
     <div className="galleryPageNavbar-Container">
       {/* <img src={logo} alt = "moonbeam logo" /> */}
       <div className="galleryPageNavbar-Title">
         <span>MOONBEAM CAKES</span>
       </div>
       <div className="galleryNavbar-Nav">
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
         <span onClick={handleSignout}>
           <Link style={{ color: "white", textDecoration: "none" }} to={"/"}>
             Signout
           </Link>
         </span>
       </div>
     </div>
   );
}