import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../../stores/userStore";
import { Footer } from "../../footer/footer";
import { SignUpPageNavbar } from "../../navbar/signupPageNavbar";
import "./signupPage.css";
import { toastify } from "../../utilsComponent";

export const AdminSignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();
  const { adminSignUp } = userStore;

  const handlePassword = (value: string) => {
    setPassword(value);
    setPasswordMatch(confirmPassword === value);
  };

  const handleConfirmPassword = (value: string) => {
    setConfirmPassword(value);
    setPasswordMatch(password === value);
  };

  const handleSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await adminSignUp(firstname, lastname, phoneNumber, email, password);
      if (!passwordMatch) {
        alert("Passwords do not match. Please check again.");
        return;
      }
        toastify.signupSuccessful(`sign up successful`);
      navigate("/adminSigninPage");
    } catch (error) {
      toastify.signupError("An error occurred, please try again later");
    }
  };
  return (
    <div>
      <SignUpPageNavbar />
      <div className="signup-container">
        <div className="signup-body">
          <div className="signup-image">
            <img src="/signupPic.png" alt="signup pic" />
          </div>
          <div className="signup-input">
            <h2>Sign Up Page</h2>
            <span>Firstname</span>
            <input
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <span>Lastname</span>
            <input
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <span>Phone Number</span>
            <input
              type="text"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <span> Email </span>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span> Password </span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              required
            />
            <span> Confirm Password</span>
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => handleConfirmPassword(e.target.value)}
              required
            />
            {!passwordMatch && (
              <p style={{ color: "red" }}>Passwords do not match</p>
            )}
            <button
              className="signup-button"
              type="button"
              onClick={(e) => handleSignup(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
