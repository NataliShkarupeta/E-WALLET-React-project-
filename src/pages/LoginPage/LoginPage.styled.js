import styled from 'styled-components';
import bgImageDesk from 'images/regLoginImg/bg-login-overlay-desk.png';
import bgImageTab from 'images/regLoginImg/bg-login-overlay-tab.png';

export const Container = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 60px 118px 196px;
    background: url(${bgImageTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--main-background-color);
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 145px;
    background: url(${bgImageDesk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--main-background-color);
  }
`;

export const LogInImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const ImageTitle = styled.h2`
  @media screen and (min-width: 768px) {
    font-family: var(--secondary-font);
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    color: #000000;
  }
`;
