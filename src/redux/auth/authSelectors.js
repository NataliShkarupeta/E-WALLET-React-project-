export const selectUser = state => state.auth.user.username;
export const selectEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectId = state => state.auth.user.id;
export const selectBalance = state => state.auth.user.balance;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectErrorAuth = state => state.auth.error;
