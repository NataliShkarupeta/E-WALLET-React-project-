import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {
  selectFinanceData,
  selectIsLoading,
} from 'redux/transaction/transactionSelectors';
import { useSelector } from 'react-redux';
import { fetchAllTransactions } from 'redux/transaction/transactionOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Rings } from 'react-loader-spinner';
import { Container } from './HomeTab.styles';
import PropTypes from 'prop-types';

export const HomeTab = ({info}) => {
  const financeData = useSelector(selectFinanceData);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const compareData = financeData.map(obj => ({
    ...obj,
    transactionDate: Date.parse(obj.transactionDate),
  }));
  const sortDate = [...compareData].sort(
    (a, b) => b.transactionDate - a.transactionDate
  );

  

  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  return (
    <Container>
      {financeData.length === 0 ? (
        <p> You don't have transactions yet. </p>
      ) : (
        <div>
          {isLoading ? (
            <Rings />
          ) : (
            <>
              <TransactionsList data={sortDate} info={info} />
            </>
          )}
        </div>
      )}
    </Container>
  );
};

HomeTab.propTypes = {
  info:PropTypes.func,
};