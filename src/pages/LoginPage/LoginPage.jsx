import { LoginForm } from 'components/LoginForm/LoginForm';
import { useMediaQuery } from 'react-responsive';
import { Container, LogInImage, ImageTitle } from './LoginPage.styled';
import logDesk1X from 'images/regLoginImg/login-desk-1x.png';
import logDesk2X from 'images/regLoginImg/login-desk-2x.png';
import logTablet1X from 'images/regLoginImg/login-tablet-1x.png';
import logTablet2X from 'images/regLoginImg/login-tablet-2x.png';

export const LoginPage = () => {
  const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <Container>
      {isDesktopOrTablet && (
        <LogInImage>
          <picture>
            <source
              srcSet={`${logDesk1X} 1x, ${logDesk2X} 2x`}
              width="435"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${logTablet1X} 1x, ${logTablet2X} 2x`}
              width="260"
              media="(min-width: 768px)"
            />
            <img src={logDesk1X} width="435" alt="Example of financial app" />
          </picture>
          <ImageTitle>Finance App</ImageTitle>
        </LogInImage>
      )}
      <LoginForm />
    </Container>
  );
};
