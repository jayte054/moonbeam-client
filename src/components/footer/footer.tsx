import { useState } from "react"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import "./footer.css"

export const Footer = () => {
    const [email, setEmail] = useState("")
    
    return (
        <div className="footer-container">
            <div className= "footer-body">
                {/* <div className = "footer-logo">
                    <img src="/moonbeamLogo.jpeg" alt="moonbeam logo" />
                </div> */}
                <div className="footer-socials">
                    <h2> Socials </h2>
                    
                        <p><a href="https://www.facebook.com/moonbeamcakes/" 
                              target="_blank"
                              rel="noopener noreferrer">
                                <FaFacebook />
                                <span>
                                Moonbeam Cakes
                                </span>
                            </a>
                        </p>
                        <p><a href = "https://www.threads.net/@moonbeam_cakes" 
                              target="_blank"
                              rel="noopener noreferrer">
                                <FaInstagram />
                                <span>
                                @moonbeam_cakes
                                </span>
                            </a>
                        </p>
                        <p><a href = "https://twitter.com/Moonbeamcakes" 
                              target="_blank"
                              rel="noopener noreferrer">
                                <FaTwitter />
                                <span>
                                @Moonbeamcakes
                                </span>
                            </a>
                        </p>
                        <p><a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FMHN2IDQ54F7MG1&e=AT3hhM8OB4dutoh-jn8PE8rE7s1fqx6ziOSDfI41475xYIgff77L3X9Hr3S4fPBPRx0O9zU8plPpuem0aqNxqy--d8csaAqaworV8w" 
                              target="_blank"
                              rel="noopener noreferrer">
                                <FaWhatsapp />
                                <span> Moonbeamcakes </span>
                            </a>
                        </p>

                </div>
                <div className="footer-operanda">
                    <h2>Location</h2>
                    <p>Address:</p>
                    <p>Phone Number: 08034223675</p>
                    <p>Opening hours: 9AM - 5pm</p>
                </div>
                <div className="footer-newsletter">
                    <h2>Email NewsLetter</h2>
                    <p>Sign up for our Email NewsLetter</p>
                    <input type="email"
                           placeholder="email address"
                           value= {email}
                           onChange = {e => setEmail(e.target.value)}
                           required
                    /><br />
                    <button >Sign up</button>
                </div>
                <div className = "footer-logo">
                    <img src="/moonbeamLogo.jpeg" alt="moonbeam logo" />
                </div>
            </div>
        </div>
    )
}