export const selectFinanceData = state => state.transactions.finance.data;
export const selectIsLoading = state => state.transactions.isLoading;
export const selectTotalBalance = state => state.transactions.finance.totalBalance;
export const selectErrorTransaction = state => state.transactions.error;
