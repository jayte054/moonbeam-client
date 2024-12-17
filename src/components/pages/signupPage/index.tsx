import { useMediaQuery } from "react-responsive";
import { SignUpPage } from "./signupPage";
import { SignUpPageMobile } from "./signupPageMobile";

export const SignupPageMobileIndex = () => {
     const isDesktop = useMediaQuery({ minWidth: 1024 });
     const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
      <div>
        {isDesktop && <SignUpPage />}
        {isMobile && <SignUpPageMobile />}
      </div>
    );
}