import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Container, RegistrationImage, ImageTitle } from './RegistrationPage.styled';
import regDesk1X from 'images/regLoginImg/reg-desk-1x.png';
import regDesk2X from 'images/regLoginImg/reg-desk-2x.png';
import regTablet1X from 'images/regLoginImg/reg-tablet-1x.png';
import regTablet2X from 'images/regLoginImg/reg-tablet-2x.png';
import { useMediaQuery } from 'react-responsive';

export const RegistrationPage = () => {
  const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Container>
      {isDesktopOrTablet && (
        <RegistrationImage>
          <picture>
            <source
              srcSet={`${regDesk1X} 1x, ${regDesk2X} 2x`}
              width="435"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${regTablet1X} 1x, ${regTablet2X} 2x`}
              width="260"
              media="(min-width: 768px)"
            />
            <img src={regDesk1X} width="435" alt="Example of financial app" />
          </picture>
          <ImageTitle>Finance App</ImageTitle>
        </RegistrationImage>
      )}
      <RegistrationForm />
    </Container>
  );
};
