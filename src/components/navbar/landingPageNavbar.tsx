 import "./landingPageNavbar.css";

 export const LandingPageNavbar = () => {
    // const logo = "moonbeam-client/public/Screenshot 2023-11-14 at 03.35.22.png"
   return (
    <div className="landingPageNavbar-Container">
      <div className="landingPageNavbar-Title">
        <span>
        {/* <img src={logo} alt = "moonbeam logo" /> */}
          MOONBEAM CAKES
        </span>
      </div>
      <div className="landingPageNavbar-Nav">
        
          <span>Home</span>
          <span>Quick Order</span>
          <span>Sign Up</span>
          <span>Sign in</span>
        
      </div>
    </div>
   )
}
