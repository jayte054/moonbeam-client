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

    return (
      <>
        {/* {user.firstname ? ( */}
        <div>
          <HomePageNavbar />
          <div className="home-container">
            <div className="header">
              <h2>Welcome to Moonbeam {name}</h2>
            </div>
            <div className="rtg-container">
              <span className="rtg-header">Ready To Go Orders</span>
              <div className="rtg-body">
                <div className="rtg-body-cakes">
                  <span>Cakes</span>
                </div>
                <div className="rtg-body-chops">
                  <span>Chops</span>
                </div>  
              </div>
            </div>
            <div className="home-body">
              <div className="quick-order" onClick={navQuickOrder}>
                <p>Quick Order</p>
                <img src={quickOrderImage} alt="quick-order-image" />
              </div>
              <div className="quick-order" onClick={navCustomOrder}>
                <p> Custom Orders </p>
                <img src={customOrderImage} alt="custom-order-image" />
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
    );
}