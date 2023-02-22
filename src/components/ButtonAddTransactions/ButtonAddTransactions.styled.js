import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  position: fixed;
  /* position: absolute; */
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    bottom: 40px;
    right: 40px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 62px;
    right: 52px;
  }
`;
