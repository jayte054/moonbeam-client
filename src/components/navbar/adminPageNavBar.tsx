import { useContext } from "react";
import { Link } from "react-router-dom";
import { AdminAuthContext } from "../../context/authcontext/adminAuthContext";
import { userStore } from "../../stores/userStore";
import "./homepageNavbar.css";

export const AdminPageNavbar = () => {
  const logo = "/Screenshot 2023-11-14 at 03.35.22.png";
  const { signOut } = userStore;
  const { admin } = useContext(AdminAuthContext);

  const handleSignout = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await signOut();
    document.location.href = "/";
  };
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
          <Link style={{ color: "white", textDecoration: "none" }} to="">
            Credentials
          </Link>
        </span>
        <span>
          <Link style={{ color: "white", textDecoration: "none" }} to="">
            Customers
          </Link>
        </span>
        <span>
          <Link style={{ color: "white", textDecoration: "none" }} to="">
            Orders
          </Link>
        </span>
        <span>
          <Link style={{ color: "white", textDecoration: "none" }} to="">
            Sales
          </Link>
        </span>
        <span onClick={(e) => handleSignout(e)}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Signout
          </Link>
        </span>
      </div>
    </div>
  );
};
