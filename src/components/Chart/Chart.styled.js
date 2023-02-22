import styled from 'styled-components';

export const StyledChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const TotalBalance = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;

  @media screen and (min-width: 768px) {
    transform: translate(-50%, -140%);
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
`;
