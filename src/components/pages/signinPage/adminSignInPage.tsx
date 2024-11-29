import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../../../context/authcontext/adminAuthContext";
import { AuthContext } from "../../../context/authcontext/authContext";
import { userStore } from "../../../stores/userStore";
import { Footer } from "../../footer/footer";
import { SigninPageNavbar } from "../../navbar/signinPageNavbar";
import "./signinPage.css";
import { toastify } from "../../utilsComponent";

export const AdminSigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateAdmin } = useContext(AdminAuthContext);
  const signinImage = "/signinPic.png";
  const navigate = useNavigate();
  const { adminSignin } = userStore;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const adminData = await adminSignin({ email, password });
      updateAdmin(adminData);
      navigate("/auth/homepage", {
        state: { data: adminData.admin.email },
        replace: true,
      });
      toastify.signInSuccessful("sign in successful");

    } catch (error) {
      toastify.signinError(`an error occurred while signing in`);

    }
  };

  return (
    <div>
      <SigninPageNavbar />
      <div className="signinpage-container">
        <div className="signin-body">
          <div className="signin-image">
            <img src={signinImage} alt="signin pic" />
          </div>
          <div className="signin-input">
            <h2>Signin page</h2>
            <span>Email</span>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="signin-button"
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </button>
            <div className="page-logo">
              <img src="/moonbeamLogo.jpeg" alt="moonbeam logo" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
