import { useMediaQuery } from "react-responsive";
import { QuickOrderPage } from "./quickOrderPage";
import { QuickOrderPageMobile } from "./quickOrderPageMobile";

export const QuickOrderPageIndex = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <QuickOrderPage />}
      {isMobile && <QuickOrderPageMobile />}
    </div>
  );
};


