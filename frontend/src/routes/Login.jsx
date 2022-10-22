import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Form, redirect } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const MuiForm = styled(Form)({});

const Login = () => {
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
  const updates = Object.fromEntries(formData);
  console.log(updates);
  return redirect('/userId/articles');
}

export default Login;
