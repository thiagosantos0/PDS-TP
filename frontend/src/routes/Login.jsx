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
import {
  selectCredentials,
  setCredentials,
} from '../features/auth/authSlice.js';

import { apiAxios } from '../app/apiAxios.js';

const MuiForm = styled(Form)({});

const Login = () => {
  const dispatch = useDispatch();
  const credentials = useSelector(selectCredentials);
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.status === 200) {
      dispatch(setCredentials(actionData?.data.userInfo));
    }
    if (credentials.isLoggedIn) navigate(`/sec/${credentials.id}/articles`);
  }, [actionData, credentials, dispatch, navigate]);

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
          Entrar
        </Typography>
        <MuiForm sx={{ mt: 1 }} method='POST'>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            name='email'
            label='Email'
            autoComplete='email'
            autoFocus
            error={actionData?.status === 404}
            helperText={actionData?.status === 404 && 'Usuário não cadastrado'}
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
            error={actionData?.status === 401}
            helperText={actionData?.status === 401 && 'Senha Incorreta'}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              <Link href='/auth/register' variant='body2'>
                {'Criar conta'}
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
  let data = {};
  try {
    const response = await apiAxios.post('/auth/login', authData);
    data.data = response.data;
    data.status = response.status;
  } catch (e) {
    data.error = e.response?.data;
    data.status = e.response?.status;
  }

  return data;
}

export default Login;
