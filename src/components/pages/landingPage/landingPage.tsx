import { HeroPage } from "../heroPage/heroPage"
import { LandingPageNavbar } from "../../navbar/landingPageNavbar"

export const LandingPage = () => {
    return (
        <div>
            <LandingPageNavbar />
            <HeroPage />
        </div>
    )
}