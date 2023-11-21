import { useState } from "react"
import "./footer.css"

export const Footer = () => {
    const [email, setEmail] = useState("")
    
    return (
        <div className="footer-container">
            <div className= "footer-body">
                <div>
                    <img src="" />
                </div>
                <div>
                    <h2> Contacts </h2>
                    <ul>
                        <li>facebooke</li>
                        <li>Instagram</li>
                        <li>twitter</li>
                        <li>Phone Number</li>
                    </ul>
                </div>
                <div>
                    <h2>Location</h2>
                    <p>Address:</p>
                    <p>Opening hours:</p>
                </div>
                <div>
                    <h2>Email NewsLetter</h2>
                    <p>Sign up for our Email NewsLetter</p>
                    <input type="email"
                           placeholder="email address"
                           value= {email}
                           onChange = {e => setEmail(e.target.value)}
                           required
                    />
                    <button >Sign up</button>
                </div>
                <div>
                    <img src="" />
                </div>
            </div>
        </div>
    )
}