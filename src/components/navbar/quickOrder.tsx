import "./galleryPageNavbar.css"
import { Link } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import "./quickOrder.css";

 export const QuickOrderPageNav = () => {
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png"
    const {signOut} = userStore

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
              to="/auth/cartPage"
            >
              Cart
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
          <span onClick={(e) => handleSignout(e)}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              Signout
            </Link>
          </span>
        </div>
      </div>
    );
}