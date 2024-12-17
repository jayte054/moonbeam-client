import { useContext, useState } from "react";
import { Footer } from "../../footer/footer";
import { LandingPageNavbarMobile } from "../../navbar/landingPageNavbarMobile"
import { AuthContext } from "../../../context/authcontext/authContext";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../../stores/userStore";
import { toastify } from "../../utilsComponent";
import './signinPageMobile.css'

export const SigninPageMobile = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [isLoading, setIsLoading] = useState(false);
      const { user, updateUser } = useContext(AuthContext);
      const signinImage = "/signinPic.png";
      const navigate = useNavigate();
      const { signIn } = userStore;

      const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
          setIsLoading(true);
          const userData = await signIn({ email, password });
          updateUser(userData);
          if (userData) {
            setIsLoading(false);
          }
          navigate("/auth/homepage", {
            state: { data: userData.user.email },
            replace: true,
          });
          toastify.signInSuccessful("sign in successful");
        } catch (error) {
          setIsLoading(false);
          toastify.signinError(`an error occurred while signing in`);
        }
      };

    return (
      <div>
        <LandingPageNavbarMobile />
        <div className="signinpageMobile-container">
          <div className="signinMobile-body">
            <div className="signinMobile-input">
              <h2>Sign In Page</h2>
              <span></span>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span></span>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="signinMobile-button"
                type="button"
                onClick={(e) => handleSubmit(e)}
              >
                {isLoading ? '...Signing In' : "Sign In"}
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
}