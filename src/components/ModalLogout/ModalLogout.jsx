import {
  ModalButtonClose,
  Overlay,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { closeModalLogOut } from 'redux/global/globalSlice';
import { logOut } from 'redux/auth/authOperations';
import {
  ModalBtnCancel,
  ModalButtonWrapper,
  ModalButtonYes,
  ModalConfirmationText,
  ModalConfirmationTitle,
  ModalContainer,
} from 'components/ModalConfirmation/ModalConfirmation.styled';


export const ModalLogout = ({ transId }) => {
  console.log(transId);
  const dispatch = useDispatch();

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      dispatch(closeModalLogOut());
    }
  };

  window.addEventListener('keydown', onClose);

  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer>
          <ModalButtonClose
            type="button"
            onClick={() => dispatch(closeModalLogOut())}
          >
            <IconContext.Provider value={{ size: '3em' }}>
              <h3>
                {' '}
                <IoCloseOutline />{' '}
              </h3>
            </IconContext.Provider>
          </ModalButtonClose>

          <ModalConfirmationTitle>Confirmation</ModalConfirmationTitle>
          <ModalConfirmationText>
            Are you sure you want this?
          </ModalConfirmationText>

          <ModalButtonWrapper>
            <ModalBtnCancel
              type="button"
              onClick={() => dispatch(closeModalLogOut())}
            >
              Cancel
            </ModalBtnCancel>
            <ModalButtonYes
              type="button"
              onClick={() => dispatch(logOut())}
              //   onClick={() => dispatch(deleteTransaction(transId.id))}
            >
              Yes, I'm sure!
            </ModalButtonYes>
          </ModalButtonWrapper>
        </ModalContainer>
      </Overlay>
    </>
  );
};
