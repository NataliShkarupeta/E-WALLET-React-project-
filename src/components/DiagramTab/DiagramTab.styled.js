import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: 'transparent';
  gap: 5px;
  padding: 43px 0 48px 0;

  @media screen and (min-width: 768px) {
    padding: 0 0 24px 0;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
    padding: 0px 0 47px 69px;
  }
`;
export const Box = styled.section`
  /* max-height: 676px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (min-width: 480px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const StatisticsTitle = styled.h2`
  font-family: var(--secondary-font);
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--title-main-color);
  margin-bottom: 8px;
  /* margin-left: 20px;
  margin-top: 40px; */

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    /* margin-left: 32px;
    margin-top: 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* display: none; */
    /* margin-bottom: 20px; */
    margin-left: 20px;
    margin-top: 32px;
  }
`;
