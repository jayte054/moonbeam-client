import { useNavigate } from "react-router-dom";
import { toastify } from "../../utilsComponent";
import { userStore } from "../../../stores/userStore";
import { useState } from "react";
import { LandingPageNavbarMobile } from "../../navbar/landingPageNavbarMobile";
import { Footer } from "../../footer/footer";
import { MoonLoader, SyncLoader } from "react-spinners";
import './signupPageMobile.css';

export const SignUpPageMobile = () => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [isLoading, setIsLoading] = useState(false);
        const [passwordMatch, setPasswordMatch] = useState(true);
        const navigate = useNavigate();
        const { signUp } = userStore;

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
            setIsLoading(true);
            const signup = await signUp(firstname, lastname, phoneNumber, email, password);
            if (!passwordMatch) {
              setIsLoading(false);
              toastify.log("Passwords do not match. Please check again.");
              return;
            }

            if (signup) {
                setIsLoading(false);
                toastify.signupSuccessful(`sign up successful`);
                navigate("/signinPage");
            }
        
          } catch (error) {
            toastify.signupError("An error occurred, please try again later");
          } finally {
            setIsLoading(false);

          }
        };
    return (
      <div>
        <LandingPageNavbarMobile />
        <div className="signupMobile-container">
          <div className="signupMobile-body">
            <div className="signupMobile-input">
              <h2>Sign Up Page</h2>
              <span></span>
              <input
                type="text"
                placeholder="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <span></span>
              <input
                type="text"
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <span></span>
              <input
                type="text"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <span></span>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span> </span>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => handlePassword(e.target.value)}
                required
              />
              <span></span>
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
                className="signupMobile-button"
                type="button"
                onClick={(e) => handleSignup(e)}
              >
                {isLoading ? '...Signing Up' : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}