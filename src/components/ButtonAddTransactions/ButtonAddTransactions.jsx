import { useDispatch } from 'react-redux';
import { openModalAddTransaction } from 'redux/global/globalSlice';
import { Button } from './ButtonAddTransactions.styled';
import { HiPlus } from 'react-icons/hi2';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(openModalAddTransaction())}>
      <HiPlus
        style={{
          display: 'block',
          width: '50px',
          height: '50px',
          backgroundColor: '#24cca7',
          borderRadius: '50%',
        }}
        color="white"
      />
    </Button>
  );
};
