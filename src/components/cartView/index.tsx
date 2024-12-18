import { useMediaQuery } from "react-responsive";
import { CartPreview } from "./cartPreview";
import { CartPreviewMobile } from "./cartPreviewMobile";

export const CartPreviewIndex= () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isDesktop && <CartPreview />}
      {isMobile && <CartPreviewMobile />}
    </div>
  );
}