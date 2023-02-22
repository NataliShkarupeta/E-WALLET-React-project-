import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  /* max-width: 320px; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    background-color: white;

  /* background-color: rgba(0, 0, 0, 0.25); */
  z-index: 1200;
  
  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.25);
    top: 0;
  left: 0;
  }
`;

export const Modal = styled.div`
  max-width: 320px;
  width: 100%;
  top: 45px;
    /* left: 50%; */

    /* width: 320px; */
    /* height: 830px; */
  padding: 20px 11px 37px 9px;
  background-color: var(--form-background-color);
  /* border-radius: 20px; */

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  
  position: fixed;
  z-index: 1200;

  

  @media screen and (min-width: 768px) {
  max-width: 540px;
  width: 100%;
  /* height: 603px; */
  padding: 40px 73px 60px 73px;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: 0;
  /* top: 50%;
    left: 50%; */
  }
`;



export const ModalTitle = styled.p`
margin-bottom: 42px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: center;
display: flex;
  align-items: center;
  text-align: center;
  color: var(--title-main-color);
  @media screen and (min-width: 768px) {
  font-size: 30px;
  line-height: 45px;
  }
`;

export const ModalForm = styled.form`
max-width: 320px;
  /* width: 320px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  @media screen and (min-width: 768px) {
    max-width: 540px;
    width: 100%;
  }
  
`;

export const Form = styled.form`
max-width: 320px;
  /* width: 320px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  @media screen and (min-width: 768px) {
    max-width: 540px;
    width: 100%;
  }
  
`;

// export const CheckboxInput = styled.input`
// display: flex;
//      gap: 9px;
//      margin-top: 25px;
//      align-items: center;
//      justify-content: center;

// `
// ;

export const CheckboxLabel = styled.label`
  &::before {
    content: '';

    width: 80px;
    height: 40px;
    background-color: var(--form-background-color);
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    transition: box-shadow 250ms linear;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 115px;
    top: 109px;
    
    @media screen and (min-width: 768px) {
      left: 219px;
    top: 139px;
  }
    width: 44px;
    height: 44px;
    background-color: var(--leisure-color);
    border-radius: 50px;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    transition: transform 250ms linear, background-color 250ms linear,
      box-shadow 250ms linear;

    text-align: center;
    font-size: 10px;
    font-weight: 500;
    line-height: 2.8;
    padding-top: 8px;
    cursor: pointer;
    transform: scale(1.10);

    transform: ${props => props.checked && 'translate(48px)'};
    background-color: ${props => (props.checked ? '#FF6596' : '#24CCA7')};
    
    
  }
`;

export const Input = styled.input`
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
`;


export const LabelText = styled.span`
color: ${props => (props.checked ? `#E0E0E0` : '#24CCA7')};
`;
export const LabelTextExpense = styled.span`
color: ${props => (props.checked ? `#FF6596` : '#E0E0E0')};
`;

export const ModalWrap = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  margin-bottom: 44px;
 
`;

export const ModalInputWrap = styled.div`
  display: flex;
  /* gap: 32px; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-right: 32px; */
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const SelectLabel = styled.select`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 394px;
  }
  &:focus-visible {
    outline: none;
  }

`;

export const InputLabel = styled.input`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  margin-right: 32px;
  
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-right: 32px;
    margin-bottom: 0;
  }

  &:focus-visible {
    
    outline: none;
    border-bottom: 1px solid var(--btn-teal-color);
    background-color: var(--text-white-color);
  }
`;

export const InputData = styled.input`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  margin-top: 42px;
  /* margin-right: 32px; */
  @media screen and (min-width: 768px) {
    width: 181px;
    margin-top: 0;
    /* margin-right: 32px; */
  }

  &:focus-visible {
    
    outline: none;
    border-bottom: 1px solid var(--btn-teal-color);
    background-color: var(--text-white-color);
  }
`;

export const InputLabelText = styled.input`
  width: 280px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 394px;
  }
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid var(--btn-teal-color);
  }

`;

export const Icon = styled.svg`
    position: relative;
    top: -26px;
  width: 24px;
  left: 60px;
  height: 24px;

    @media screen and (min-width: 768px) {
      top: -6px;
  left: -43px;
  }
  :hover {
  transform: scale(1.10);
  cursor: pointer;
  }
`;

export const ModalButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const ModalButtonAdd = styled.button`
  width: 300px;
  padding: 13px 65px 13px 71px;
  border: none;
  background-color: var(--btn-teal-color);
  border-radius: 20px;
  color: var(--text-white-color);

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* @media screen and (min-width: 768px) {
    width: 394px;
  } */
  :hover {
  background-color: #24cca7;
  color: var(--form-background-color);
  transform: scale(1.04);
  cursor: pointer;
  }
`;

export const ModalButtonCancel = styled.button`
  width: 300px;
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
  text-transform: uppercase;
  color:var(--btn-blue-color);
  :hover {
  background-color: var(--main-currency-background-color);
  color: var(--form-background-color);
  transform: scale(1.04);
  cursor: pointer;
  }
`;

export const ModalButtonClose = styled.button`

opacity: 0;
  /* pointer-events: none;
  visibility: hidden; */

@media screen and (min-width: 768px) {
  opacity: 1;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: var(--btn-white-color);
  outline: blue;
  padding: 0;
  cursor: pointer;

  :hover {
  transform: scale(1.10);
  }
  }
  
`;

export const Span = styled.span`
  color: var(--slider-color);
    font-size: 1rem;
    margin-top: 0.3rem;
  
`;


