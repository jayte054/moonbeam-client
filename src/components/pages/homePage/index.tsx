import { useMediaQuery } from "react-responsive";
import { HomePageMobile } from "./homePageMobile";
import { Homepage } from "./homePage";

export const HomePageIndex = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            {isDesktop && <Homepage />}
            {isMobile && <HomePageMobile />}
        </div>
    )
}