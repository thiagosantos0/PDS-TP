import { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {
  matchPath,
  Outlet,
  resolvePath,
  useLocation,
  useLoaderData,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCredentials,
  setCredentials,
} from '../features/auth/authSlice.js';

import { apiAxios } from '../app/apiAxios.js';

const useFindMatch = (paths = {}) => {
  const location = useLocation();
  const foundMatch = Object.entries(paths).find(([, path]) => {
    const resolved = resolvePath(path);
    const match = matchPath({ path: resolved.pathname }, location.pathname);
    return Boolean(match);
  });

  return foundMatch
    ? { match: true, name: foundMatch[0], path: foundMatch[1] }
    : { match: false };
};

const Layout = () => {
  const loaderData = useLoaderData();
  const credentials = useSelector((state) => selectCredentials(state));
  const dispatch = useDispatch();
  const { name: matchName } = useFindMatch({ auth: '/auth/*' });
  const loading = useMemo(
    () => loaderData?.status === 200 && !credentials.isLoggedIn,
    [credentials.isLoggedIn, loaderData?.status],
  );

  useEffect(() => {
    if (loading) dispatch(setCredentials(loaderData.data.userInfo));
  }, [dispatch, loaderData.data.userInfo, loading]);

  const unauthenticated = (
    <>
      <Button href='/auth/register' sx={{ color: '#fff' }}>
        Cadastrar
      </Button>
      <Button
        href='/auth/login'
        color='secondary'
        variant='contained'
        sx={{
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        }}
      >
        Entrar
      </Button>
    </>
  );

  const authenticated = <Box>{credentials.name}</Box>;

  const authNavigation = credentials.isLoggedIn
    ? authenticated
    : unauthenticated;

  return (
    <Box>
      <AppBar component='nav'>
        <Toolbar
          variant='dense'
          sx={{
            flexDirection: { xs: 'row-reverse', sm: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Link
            href='/'
            variant='h5'
            underline='none'
            display={{ xs: 'none', sm: 'block' }}
            sx={{ color: '#fff', cursor: 'pointer' }}
          >
            CompArtigos
          </Link>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            {matchName !== 'auth' && authNavigation}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={(theme) => ({
          ...theme.mixins.toolbar,
        })}
      />
      {loading ? (
        <Backdrop
          open={true}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress />
        </Backdrop>
      ) : (
        <Outlet />
      )}
    </Box>
  );
};

export async function loader() {
  let data = {};
  try {
    const response = await apiAxios.get('/auth/is-logged-in');
    data.data = response.data;
    data.status = response.status;
  } catch (e) {
    console.error(e);
    data.status = e.response.status;
  }

  return data;
}

export default Layout;
