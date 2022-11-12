import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { matchPath, Outlet, resolvePath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCredentials } from '../features/auth/authSlice.js';

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
  const credentials = useSelector((state) => selectCredentials(state));
  const { name: matchName } = useFindMatch({ auth: '/auth/*' });

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
      <Outlet />
    </Box>
  );
};

export default Layout;
