import {useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { Footer } from "../../footer/footer"
import { HomePageNavbar } from "../../navbar/homepageNavbar"
import {AuthContext} from "../../../context/authcontext/authContext"
import "./homePage.css"

export const Homepage = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)
    const name = user?.user?.firstname || ""

    const navQuickOrder = () => {
        navigate("/auth/quickOrderPage")
    }
    return(
        <div>
            <HomePageNavbar />
            <div className="home-container">
            <div className = "home-body">
                <div className="header">
                <h2>Welcome to Moonbeam {name}</h2>
                </div>
            <div className="package-container">
                <div className="package-cake">
                    <h4>Cakes</h4>
                    <img src="/cakepic2.png" alt="cake-pic"/>
                </div>
                <div className="package-surprise">
                    <h4>Surpise Packages</h4>
                    <img src="/package-pic.png" alt="surprise-package" />
                </div>
                <div className="package-chops">
                    <h4>Small Chops</h4>
                    <img src="/chops_pic.png" alt="chops pic" />
                </div>
            </div>
            <div className="quick-order"
                 onClick={navQuickOrder}
            >
                <h3>Quick Order</h3>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}