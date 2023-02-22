import styled from 'styled-components';
import wavePic from './wave.png';

export const Container = styled.div`
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 31px;

  width: 100%;
  min-height: 174px;
  /* margin-top: 28px; */
  background: url(${wavePic}),
    linear-gradient(
      180deg,
      var(--header-currency-background-color) 29%,
      var(--main-currency-background-color) 20%
    );
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  @media screen and (min-width: 480px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    width: 336px;
    height: 182px;
    background: url(${wavePic}),
      linear-gradient(
        180deg,
        var(--header-currency-background-color) 27.5%,
        var(--main-currency-background-color) 20%
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  @media screen and (min-width: 1280px) {
    min-height: 331px;
    width: 393px;
    background: url(${wavePic}),
      linear-gradient(
        180deg,
        var(--header-currency-background-color) 18%,
        var(--main-currency-background-color) 10%
      );
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border: none;
  text-align: center;
  font-family: var(--main-font);
  font-style: normal;
  color: var(--text-white-color);
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
`;

export const Thead = styled.thead`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const Tbody = styled.tbody`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const RowHeading = styled.th`
  padding-top: 11px;
  padding-bottom: 12px;
  @media screen and (min-width: 1280px) {
    padding-top: 17px;
    padding-bottom: 16px;
  }
`;

export const RowBody = styled.td`
  padding-top: 12px;
  padding-bottom: 0;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
    padding-bottom: 4px;
  }
`;
