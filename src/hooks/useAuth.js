import { useSelector } from 'react-redux';
import {
  selectUser,
  selectEmail,
  selectToken,
  selectId,
  selectBalance,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const id = useSelector(selectId);
  const balance = useSelector(selectBalance);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    user,
    email,
    token,
    id,
    balance,
    isLoggedIn,
    isRefreshing,
  };
};
