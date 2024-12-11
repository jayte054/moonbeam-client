import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../context/authcontext/authContext";
import { userStore } from "../../../stores/userStore";
import { Footer } from "../../footer/footer";
import { SigninPageNavbar } from "../../navbar/signinPageNavbar"
import "./signinPage.css";
import { toastify } from "../../utilsComponent";

export const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const {user, updateUser} = useContext(AuthContext)
    const signinImage = "/signinPic.png"
    const navigate = useNavigate()
    const {signIn} = userStore

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try{
              setIsLoading(true);
            const userData = await signIn({email, password})
            updateUser(userData)
             if (userData) {
               setIsLoading(false);
             }
            navigate("/auth/homepage", {state: {data: userData.user.email}, replace: true})
            toastify.signInSuccessful('sign in successful')
        } catch(error) {
            toastify.signinError(`an error occurred while signing in`)
        }
        
    }


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
                {isLoading ? <SyncLoader size={6} /> : "Sign In"}
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