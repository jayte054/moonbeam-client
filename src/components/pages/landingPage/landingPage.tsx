import { HeroPage } from "../heroPage/heroPage"
import { LandingPageNavbar } from "../../navbar/landingPageNavbar"
import { Footer } from "../../footer/footer"

export const LandingPage = () => {
    return (
        <div>
            <LandingPageNavbar />
            <HeroPage />
            <Footer />
        </div>
    )
}