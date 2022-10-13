import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Outlet, useResolvedPath, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCredentials } from '../features/auth/authSlice.js';

const Layout = () => {
  const credentials = useSelector((state) => selectCredentials(state));
  const resolved = useResolvedPath('/auth/*');
  const match = useMatch({ path: resolved.pathname });

  const navigation = credentials.isLoggedIn ? (
    <Box>{credentials.name}</Box>
  ) : (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
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
    </Box>
  );

  return (
    <Box>
      <AppBar component='nav'>
        <Toolbar
          variant='dense'
          sx={{ flexDirection: { xs: 'row-reverse', sm: 'row' } }}
        >
          <Link
            href='/'
            variant='h5'
            underline='none'
            display={{ xs: 'none', sm: 'block' }}
            sx={{ flexGrow: 1, color: '#fff', cursor: 'pointer' }}
          >
            CompArtigos
          </Link>
          {!match && navigation}
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
