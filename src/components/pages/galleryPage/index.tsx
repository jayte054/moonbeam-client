import { useMediaQuery } from "react-responsive";
import { GalleryPageAuth } from "./galleryPageAuth";
import { GalleryPageAuthMobile } from "./galleryPageAuthMobile";

export const GalleryPageIndex = () => {
     const isDesktop = useMediaQuery({ minWidth: 1024 });
     const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div>
            {isDesktop && <GalleryPageAuth />}
            {isMobile && <GalleryPageAuthMobile />}
        </div>
    )
}
