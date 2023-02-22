const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/auth/authSelectors');

export const PrivateRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return !loggedIn ? <Navigate to="/login" /> : Component;
};

export const PublicRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return loggedIn ? <Navigate to="/" /> : Component;
};