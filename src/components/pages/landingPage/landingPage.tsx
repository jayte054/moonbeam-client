import { HeroPage } from "../heroPage/heroPage"
import { LandingPageNavbar } from "../../navbar/landingPageNavbar"
import { Footer } from "../../footer/footer"
import MediaQuery, { useMediaQuery } from "react-responsive"
import { LandingPageNavbarMobile } from "../../navbar/landingPageNavbarMobile"
import { useState } from "react"
import { HeroPageIndex } from "../heroPage"

export const LandingPage = () => {
    // const [isDesktop, seIsDektop] = useState(false)
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
      <div>
        {isDesktop && <LandingPageNavbar />}
        {isTablet && <LandingPageNavbar />}
        {isMobile && <LandingPageNavbarMobile />}
        <HeroPageIndex />
        <Footer />
      </div>
    );
}