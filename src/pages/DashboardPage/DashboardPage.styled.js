import styled from 'styled-components';
import bgImageDesk from 'images/dashboardBackGround/bg-overlay-blured-desk.png';
import bgImageTab from 'images/dashboardBackGround/bg-overlay-blured-tab.png';

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--main-background-color);
  @media screen and (min-width: 768px) {
    background: url(${bgImageTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (min-width: 1280px) {
    background: url(${bgImageDesk});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--main-background-color);
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    background-color: transparent;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
    padding: 0 16px;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  position: relative;
  background-color: var(--main-background-color);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 0;
    background-color: transparent;
    padding: 32px 0 20px 0;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    padding: 40px 69px 63px 0;
    &::after {
      content: '';
      display: block;
      top: 0;
      right: 0;
      height: 100%;
      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
      position: absolute;
    }
  }
`;

export const NavBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0 0;
  @media screen and (min-width: 768px) {
    gap: 32px;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ImageTitle = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
`