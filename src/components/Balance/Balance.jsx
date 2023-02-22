// import React from 'react'
// import { useSelector } from 'react-redux';
// import { selectTotalBalance } from 'redux/transaction/transactionSelectors';
// import { Container, BalanceText, BalanceState, Span } from './Balance.styled';

// export const Balance = () => {

//   const balance = useSelector(selectTotalBalance);
//   console.log(balance)
//   return (
//     <Container>
//       <BalanceText>your balance</BalanceText>
//       <BalanceState><Span>&#8372;&#160;</Span>{balance}</BalanceState>
//     </Container>

//   )
// }

import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotalBalance,
  selectIsLoading,
} from 'redux/transaction/transactionSelectors';
import { Container, BalanceText, BalanceState, Span } from './Balance.styled';
import { Rings } from 'react-loader-spinner';

export const Balance = () => {
  const balance = useSelector(selectTotalBalance);
  const isLoading = useSelector(selectIsLoading);
  const showBalance = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  });

  return (
    <Container>
      <BalanceText>your balance</BalanceText>
      {isLoading ? (
        <Rings />
      ) : (
        <>
          <BalanceState>
            <Span>&#8372;&#160;</Span>
            {showBalance.format(balance.toFixed(2))}
          </BalanceState>
        </>
      )}
     
    </Container>
  );
};
