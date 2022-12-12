import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Index = () => {
  return (
    <Container component='main' sx={{ bgcolor: 'aqua' }}>
      <Box
        sx={{
          m: '0 auto',
          display: 'flex',
          width: 'fit-content',
          flexDirection: 'column',
          alignItems: 'center',
          inlineSize: 'min-content',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography
          sx={{
            typography: {
              md: 'h1',
              sm: 'h2',
              xs: 'h3',
            },
            fontWeight: {
              md: 'bold',
              sm: 'bold',
              xs: 'bold',
            },
            background:
              'linear-gradient(90deg, #000000 -13.14%, #007FFF -13.14%, #0059B2 121.96%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            whiteSpace: 'nowrap',
            marginBottom: '1rem',
          }}
        >
          Stay Curious.
        </Typography>
        <Typography
          variant='h6'
          textAlign='center'
          padding='0 2rem'
          marginBottom='2em'
        >
          Discover stories, thinking, and expertise from writers on any topic.
        </Typography>
        <Button
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          href='/articles'
          data-cy='visit-articles-btn'
        >
          Visitar Artigos
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
