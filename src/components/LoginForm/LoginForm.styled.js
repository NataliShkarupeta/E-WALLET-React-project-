import styled from 'styled-components';

export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 480px;
  padding: 32px 20px 36px;
  background-color: var(--form-background-color);

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 60px 65px;
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px 59px 62px 65px;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInLabel = styled.label`
  position: relative;
  width: 280px;
  margin-bottom: 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: var(--main-currency-background-color);
  }
  @media screen and (min-width: 768px) {
    width: 410px;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const LogInInput = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 0 8px 54px;
  font-family: var(--main-font);
  font-size: 18px;
  line-height: 27px;
  color: var(--main-currency-background-color);
  border: none;
  border-bottom: solid 1px var(--border--reg-color);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-family: var(--main-font);
    font-size: 18px;
    line-height: 27px;
    color: var(--tex-logout-color);
  }
  &:hover,
  &:focus {
    border-color: var(--main-currency-background-color);
  }
`;

export const InputIcon = styled.svg`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--border--reg-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    fill: var(--main-currency-background-color);
  }
`;

export const ButtonContainer = styled.div`
  width: 220px;
  height: 120px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonLogIn = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: #24cca7;
  border-radius: 20px;
  color: var(--form-background-color);
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--main-currency-background-color);
    color: var(--form-background-color);
    transform: scale(1.02);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const ButtonRegister = styled.button`
  width: 280px;
  height: 50px;
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: var(--form-background-color);
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  color: var(--main-currency-background-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: var(--main-currency-background-color);
    color: var(--form-background-color);
    transform: scale(1.02);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const ErrorText = styled.span`
  font-family: var(--main-font);
  font-size: 18px;
  line-height: 27px;
  margin-top: 7px;
  color: red;
`;
