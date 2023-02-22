import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* max-width: 320px; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
  outline: red;
  
  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
  left: 0;
  }
`;

export const ModalContainer = styled.div`
  max-width: 320px;
  width: 320px;
  height: 280px;
  /* padding: 40px; */
  background-color: #ffffff;
  /* border-radius: 20px; */
  padding: 20px;

  /* display: flex;
  flex-direction: column; */
  /* align-items: flex-start; */
  /* gap: 40px; */
  position: relative;
  z-index: 1200;
  @media screen and (min-width: 768px) {
  max-width: 540px;
  width: 100%;
  /* height: 580px; */
  padding: 40px 73px 64px 40px;
  border-radius: 20px;
  flex-direction: column;
  }
`;

export const ModalConfirmationTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  color: #000000;
  @media screen and (min-width: 768px) {
  font-size: 30px;
  line-height: 45px;
  }
`;

export const ModalConfirmationText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 42px;
  color: #000000;
  @media screen and (min-width: 768px) {
  font-size: 18px;

  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 60px;
  }
`;

export const ModalButtonYes = styled.button`
  /* width: 200px; */
  padding: 10px 20px;
  border: none;
  background-color: #24cca7;
  border-radius: 16px;
  color: #ffffff;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  :hover {
    background-color: #24cca7;
    color: var(--form-background-color);
    transform: scale(1.04);
    cursor: pointer;
  }
`;

export const ModalBtnCancel = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 55px;
  }
  :hover {
    background-color: var(--main-currency-background-color);
    color: var(--form-background-color);
    transform: scale(1.04);
    cursor: pointer;
  }
`;