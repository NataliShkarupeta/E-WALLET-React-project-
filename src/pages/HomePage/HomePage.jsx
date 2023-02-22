import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from 'components/HomeTab/HomeTab';
import {
  selectAddTransactionOpen,
  selectUpDateTransactionsModal,
  selectModalConfirmation,
} from 'redux/global/globalSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect } from 'react';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { UpDateModal } from 'components/upDateModal/upDateModal';
import { BlockForAddButton } from './HomePage.styled';
import { ModalConfirmation } from 'components/ModalConfirmation/ModalConfirmation';
import { Balance } from 'components/Balance/Balance';
const HomePage = () => {
  const isModalAddTransactionOpen = useSelector(selectAddTransactionOpen);
  const isModalUpDateTransaction = useSelector(selectUpDateTransactionsModal);
  const isModalConfirmations = useSelector(selectModalConfirmation);
  console.log(isModalAddTransactionOpen);
  console.log(isModalUpDateTransaction);
  console.log(isModalConfirmations);
  const dispatch = useDispatch();
  const isTablet = useMedia('(min-width: 768px)');

  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      {!isTablet && <Balance />}
      <BlockForAddButton>
      <HomeTab info={setData} />
      <ButtonAddTransactions />
      {isModalConfirmations && data && (
        <ModalConfirmation transId={data} />
      )}
      {isModalUpDateTransaction && data && (
        <UpDateModal trans={data} close={setData} />
      )}
      {isModalAddTransactionOpen && <ModalAddTransaction />}
    </BlockForAddButton>
    </div>
  );
};

export default HomePage;



// import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import { HomeTab } from 'components/HomeTab/HomeTab';
// import {
//   selectAddTransactionOpen,
//   selectUpDateTransactionsModal,
//   selectModalConfirmation,
// } from 'redux/global/globalSelectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
// import { useEffect } from 'react';
// import { fetchCategories } from 'redux/categories/categoriesOperations';
// import { useState } from 'react';
// import { UpDateModal } from 'components/upDateModal/upDateModal';
// import { BlockForAddButton } from './HomePage.styled';
// import { ModalConfirmation } from 'components/ModalConfirmation/ModalConfirmation';

// const HomePage = () => {
//   const isModalAddTransactionOpen = useSelector(selectAddTransactionOpen);
//   const isModalUpDateTransaction = useSelector(selectUpDateTransactionsModal);
//   const isModalConfirmations = useSelector(selectModalConfirmation);
//   console.log(isModalAddTransactionOpen);
//   console.log(isModalUpDateTransaction);
//   console.log(isModalConfirmations);
//   const dispatch = useDispatch();

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   return (
//     <BlockForAddButton>
//       <HomeTab info={setData} />
//       <ButtonAddTransactions />
//       {isModalConfirmations && data && (
//         <ModalConfirmation transId={data} />
//       )}
//       {isModalUpDateTransaction && data && (
//         <UpDateModal trans={data} close={setData} />
//       )}
//       {isModalAddTransactionOpen && <ModalAddTransaction />}
//     </BlockForAddButton>
//   );
// };

// export default HomePage;
