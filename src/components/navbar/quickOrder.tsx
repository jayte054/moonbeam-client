import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import "./quickOrder.css";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { useContext } from "react";

 export const QuickOrderPageNav = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
    const {signOut} = userStore;
    const {admin} = useContext(AdminAuthContext)

    const handleSignout = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        await signOut()
        document.location.href = "/"

    }
   
    return (
      <div className="quickOrder-Container">
        {/* <img src={logo} alt = "moonbeam logo" /> */}
        <div className="quickOrder-Title">
          <span>MOONBEAM CAKES</span>
        </div>
        <div className="quickOrder-Nav">
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
                to="/auth/adminHomePage"
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