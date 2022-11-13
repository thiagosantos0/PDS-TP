import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCredentials } from '../features/auth/authSlice.js';

const RequireAuth = () => {
  const { isLoggedIn } = useSelector(selectCredentials);
  const location = useLocation();

  if (isLoggedIn) return <Outlet />;
  return <Navigate to='/auth/login' state={{ from: location }} replace />;
};

export default RequireAuth;
