import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Form, useActionData, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { apiAxios } from '../app/apiAxios.js';
import {
  setCredentials,
  selectCredentials,
} from '../features/auth/authSlice.js';

const MuiForm = styled(Form)({});

const Register = () => {
  const dispatch = useDispatch();
  const credentials = useSelector(selectCredentials);
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData) dispatch(setCredentials(actionData.newUser));
    if (credentials.isLoggedIn) navigate(`/${credentials.id}/articles`);
  }, [actionData, credentials]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Cadastrar
        </Typography>
        <MuiForm sx={{ mt: 1 }} method='POST'>
          <TextField
            margin='normal'
            fullWidth
            id='name'
            name='name'
            label='Nome'
            type='text'
            autoComplete='name'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            name='email'
            label='Email'
            autoComplete='email'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            name='password'
            label='Senha'
            type='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              <Link href='/auth/login' variant='body2'>
                {'Entrar'}
              </Link>
            </Grid>
          </Grid>
        </MuiForm>
      </Box>
    </Container>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  const authData = Object.fromEntries(formData);
  const { data } = await apiAxios.post('/auth/signup', authData);
  return data;
}

export default Register;
