import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  width: 100%;
  /* min-height: 100vh; */
  /* display: flex;
  flex-direction: column; */
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 784px;
    padding: 46px 0 0 69px;
  }
`;
