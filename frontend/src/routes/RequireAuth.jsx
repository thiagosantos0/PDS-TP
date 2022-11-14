import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCredentials } from '../features/auth/authSlice.js';
import { apiAxios } from '../app/apiAxios.js';

const RequireAuth = () => {
  const { isLoggedIn } = useSelector(selectCredentials);
  const location = useLocation();

  if (isLoggedIn) return <Outlet />;
  return <Navigate to='/auth/login' state={{ from: location }} replace />;
};

export async function action() {
  try {
    await apiAxios.get('/auth/logout');
  } catch (e) {
    console.log(e);
  }

  return { ok: true, status: 200 };
}

export default RequireAuth;
