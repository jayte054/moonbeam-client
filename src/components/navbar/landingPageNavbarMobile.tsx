import { Link } from "react-router-dom";
import "./landingPageNavbarMobile.css";
import { FaBurger } from "react-icons/fa6";
import { NavMenu } from "./navMenu";
import { useState } from "react";

export const LandingPageNavbarMobile = () => {
    const [showMenu, setShowMenu] = useState(false);
    const logo = "/Screenshot 2023-11-14 at 03.35.22.png";

    const toggleMenu = () =>  setShowMenu((prev) => !prev)

  return (
    <div className="landingPageNavbarMobile-Container">
      {/* <img src={logo} alt = "moonbeam logo" /> */}
      <div className="landingPageNavbarMobile-Title">
        <span>MOONBEAM CAKES</span>
      </div>
      <div className="nav-burger">
        {showMenu ?  <span onClick={toggleMenu}>X</span> : <FaBurger onClick={toggleMenu} />}
        {showMenu && (
          <div className='nav-menu'>
            <NavMenu 
                showMenu={showMenu}
                toggleMenu={toggleMenu}
            />
          </div>
        )}
      </div>
      
    </div>
  );
};
