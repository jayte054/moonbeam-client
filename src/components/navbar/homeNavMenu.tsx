import { Link } from "react-router-dom";
import "./navMenu.css";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { userStore } from "../../stores/userStore";
import { useContext } from "react";

export const HomeNavMenu = ({ showMenu, setShowMenu, toggleMenu }: any) => {
    const { signOut } = userStore;
    const { admin } = useContext(AdminAuthContext);

    const handleSignout = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      await signOut();
      document.location.href = "/";
    };
    
  return (
    <div className="nav-menu-container">
      <div className="nav-menu-list">
        <span>
          <Link
            style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
            to="/auth/homepage"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
            to="/auth/galleryPage"
          >
            Gallery
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
            to="/auth/ordersPage"
          >
            Orders
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
            to="/auth/profilePage"
          >
            Profile
          </Link>
        </span>
        {admin.isAdmin === true ? (
          <span>
            <Link
              style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
              to="/auth/adminHomePage"
            >
              Admin
            </Link>
          </span>
        ) : (
          " "
        )}
        <span onClick={(e) => handleSignout(e)}>
          <Link
            style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }}
            to="/"
          >
            Signout
          </Link>
        </span>
      </div>
    </div>
  );
};
