import {useContext, useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom';
import { Footer } from "../../footer/footer"
import { HomePageNavbar } from "../../navbar/homepageNavbar"
import {AuthContext} from "../../../context/authcontext/authContext"
import { userStore } from "../../../stores/userStore";
import "./homePage.css"

export const Homepage = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const {signOut} = userStore;
    const customOrderImage = "/custom-img2.png"
    const quickOrderImage = "/quick-img.png"
    console.log(user)
   

     const handleSignout = async () => {
        await signOut()
        document.location.href = "/"
    }

    const name = user?.firstname  || ""


    const navQuickOrder = () => {
        navigate("/auth/quickOrderPage")
    }

    const navCustomOrder = () => {
        navigate("/auth/customOrderPage")
    }

    return(
        <>
       {/* {user.firstname ? ( */}
       <div>
            <HomePageNavbar />
            <div className="home-container">
                 <div className="header">
                <h2>Welcome to Moonbeam {name}</h2>
                </div>
            <div className = "home-body">
               
            {/* <div className="package-container">
                
                 <div className="package-cake">
                    <h4>Cakes</h4>
                    <img src="/cakepic2.png" alt="cake-pic"/>
                </div>
                <div className="package-surprise">
                    <h4>Surprise Packages</h4>
                    <img src="/package-pic.png" alt="surprise-package" />
                </div>
                <div className="package-chops">
                    <h4>Small Chops / Pastries</h4>
                    <img src="/chops_pic.png" alt="chops pic" />
                </div> 
            </div> */}
            <div className="quick-order"
                 onClick={navQuickOrder}
            >
                <p>Quick Order</p>
                <img src={quickOrderImage} alt="quick-order-image" />
            </div>
            <div className="quick-order"
                 onClick={navCustomOrder}
            >
                    <p> Custom Orders </p>
                    <img src={customOrderImage} alt= "custom-order-image" />
                </div>
         
            </div>
            </div>
            <Footer />
        </div>
        {/* // )
        // : (
        //     handleSignout()
        // )} */}
        </>
    )
}