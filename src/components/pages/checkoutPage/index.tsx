import { useMediaQuery } from "react-responsive";
import { CheckoutPage } from "./checkoutPage";
import { CheckoutPageMobile } from "./checkoutPageMobile";

export const CheckoutPageIndex = () => {

     const isDesktop = useMediaQuery({ minWidth: 1024 });
     const isMobile = useMediaQuery({ maxWidth: 767 });

     return (
       <div>
         {isDesktop && <CheckoutPage />}
         {isMobile && <CheckoutPageMobile />}
       </div>
     );
}