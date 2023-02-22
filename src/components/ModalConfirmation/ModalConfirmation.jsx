import {
  ModalButtonClose,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { IconContext } from 'react-icons';
import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { closeModalConfirmation } from 'redux/global/globalSlice';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import {
  ModalBtnCancel,
  ModalButtonWrapper,
  ModalButtonYes,
  ModalConfirmationText,
  ModalConfirmationTitle,
  ModalContainer,
  Overlay,
} from './ModalConfirmation.styled';
import PropTypes from 'prop-types';

export const ModalConfirmation = ({transId}) => {
  console.log(transId);
  const dispatch = useDispatch();

  

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      dispatch(closeModalConfirmation());
    }
  };



  window.addEventListener('keydown', onClose);

  return (
    <>
      <Overlay onClick={onClose}>
        <ModalContainer>
          <ModalButtonClose
            type="button"
            onClick={() => dispatch(closeModalConfirmation())}
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
              onClick={() => dispatch(closeModalConfirmation())}
            >
              Cancel
            </ModalBtnCancel>
            <ModalButtonYes
              type="button"
              
              onClick={()=>dispatch(deleteTransaction(transId.id))}
            >
              Yes, I'm sure!
            </ModalButtonYes>
          </ModalButtonWrapper>
        </ModalContainer>
      </Overlay>
    </>
  );
};

ModalConfirmation.propTypes = {
  transId: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};