import { useMediaQuery } from "react-responsive";
import { CartItemsPage } from "./cartItemsPage";
import { CartItemsPageMobile } from "./cartItemsMobile";

export const CartItemsPageIndex = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
        {isDesktop && <CartItemsPage />}
        {isMobile && <CartItemsPageMobile />}
    </div>
  )
};
