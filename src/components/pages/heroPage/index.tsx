import { useMediaQuery } from 'react-responsive';
import { HeroPage } from './heroPage';
import { HeroPageMobile } from './heroPageMobile';

export const HeroPageIndex = () => {
    const isDesktop = useMediaQuery({minWidth: 1024})
    const isMobile = useMediaQuery({maxWidth: 767});


    return (
      <div>
        {isDesktop && <HeroPage />}
        {isMobile && <HeroPageMobile />}
      </div>
    );
}