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
            to="/auth/adminHomePage"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/auth/admin/credentials"
          >
            Credentials
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/auth/adminCustomersPage"
          >
            Customers
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/auth/adminOrdersPage"
          >
            Orders
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/auth/adminSalesPage"
          >
            Sales
          </Link>
        </span>
        <span>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/auth/adminReviewsPage"
          >
            Reviews
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
