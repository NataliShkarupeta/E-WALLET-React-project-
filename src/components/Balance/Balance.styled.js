import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  background-color: var(--form-background-color);
  border-radius: 30px;
  padding: 8px 40px 11px;
  margin: 15px 0 32px;
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 336px;
    height: 80px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--text-grey-color);
  margin-bottom: 6px;
`;

export const Span = styled.span`
  font-weight: 400;
`;

export const BalanceState = styled.p`
  font-family: var(--secondary-font);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
`;
