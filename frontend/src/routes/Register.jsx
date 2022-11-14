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

import { apiAxios } from '../app/apiAxios.js';

const MuiForm = styled(Form)({});

const Register = () => {
  const actionData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(actionData);
    if (actionData?.status === 200) navigate('/auth/login');
  }, [actionData, navigate]);

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
            error={actionData?.status === 409}
            helperText={actionData?.status === 409 && 'Usuário já cadastrado'}
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
  let data = {};
  try {
    const response = await apiAxios.post('/auth/signup', authData);
    data.data = response.data;
    data.status = response.status;
  } catch (e) {
    data.error = e.response?.data;
    data.status = e.response?.status;
    console.error(e);
  }

  return data;
}

export default Register;
