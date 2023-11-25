import { useState } from "react";
import { Footer } from "../../footer/footer";
import { SigninPageNavbar } from "../../navbar/signinPageNavbar"
import "./signinPage.css";
export const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const signinImage = "/signinPic.png"
    return (
        <div style={{backgroundColor: "rgba(250, 246, 246, 0.459)",}}>
            <SigninPageNavbar />
            <div className = "signinpage-container">
                <div className = "signin-body">
                <div className="signin-image">
                <img src = {signinImage} alt = "signin pic" />
                </div>
                <div className="signin-input">
                <h2>Signin page</h2>
                <span>Email</span>
                <input type = "email"
                       placeholder = "email"
                       value = {email}
                       onChange = {e => setEmail(e.target.value)}
                       required
                />
                <span>Password</span>
                <input type = "password"
                       placeholder = "password"
                       value = {password}
                       onChange = {e => setPassword(e.target.value)}
                       required
                />
                <button className="signin-button"
                        type="button">
                            Sign In
                </button>
                <div className="page-logo">
                <img src="/moonbeamLogo.jpeg" alt="moonbeam logo" 
                                              
                />
                </div>
                

                </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}