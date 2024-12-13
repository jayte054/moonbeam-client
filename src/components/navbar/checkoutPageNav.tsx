import "./galleryPageNavbar.css";
import { Link } from "react-router-dom";
import "./checkoutPageNav.css";
import { userStore } from "../../stores/userStore";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";

export const CheckoutPageNav = () => {
  const logo = "/Screenshot 2023-11-14 at 03.35.22.png";
  const { signOut } = userStore;
  const {admin} = useContext(AdminAuthContext)

  const handleSignout = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await signOut();
    document.location.href = "/";
  };
  return (
    <div className="checkoutPageNavbar-Container">
      {/* <img src={logo} alt = "moonbeam logo" /> */}
      <div className="checkoutPageNavbar-Title">
        <span>MOONBEAM CAKES</span>
      </div>
      <div className="checkoutNavbar-Nav">
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
            to="/auth/profilePage"
          >
            Profile
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
        <span onClick={handleSignout}>
          <Link style={{ color: "rgb(54, 47, 47)", textDecoration: "none" }} to={"/"}>
            Signout
          </Link>
        </span>
      </div>
    </div>
  );
};
