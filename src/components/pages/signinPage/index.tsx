import { useMediaQuery } from "react-responsive";
import { SigninPage } from "./signinPage";
import { SigninPageMobile } from "./signinPageMobile";

export const SigninPageIndex = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            {isDesktop && <SigninPage />}
            {isMobile && <SigninPageMobile />}
        </div>
    )
}