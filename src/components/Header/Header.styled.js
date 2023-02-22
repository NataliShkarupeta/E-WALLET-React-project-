import styled from 'styled-components';

export const HeaderWrap = styled.header`
  background-color: var(--white-background-color);
  width: 100%;
`;

export const Container = styled.div`
  padding: 15px 20px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white-background-color);
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: var(--tex-logout-color);
  text-transform: capitalize;
`;

export const User = styled.p`
  padding: 0;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 0 12px 0 0;
    &::after {
      content: '';
      display: block;
      top: -4px;
      right: 0;
      height: 30px;
      border: 1px solid var(--tex-logout-color);
      position: absolute;
    }
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Button = styled.a`
  display: flex;
  gap: 8px;
  padding: 0 0 0 8px;
  @media screen and (min-width: 768px) {
    padding: 0 0 0 12px;
  }
`;

//----аві
