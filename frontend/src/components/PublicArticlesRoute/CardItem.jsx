import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ userId, docId, image, name, description, updatedAt }) => {
  const navigate = useNavigate();
  const date = useMemo(() => {
    const current = new Date(updatedAt);
    const pattern = isToday(current) ? 'p' : 'PP';
    return format(current, pattern, { locale: ptBR });
  }, [updatedAt]);

  return (
    <Card
      onClick={() => navigate(`/${userId}/${docId}/reader`)}
      sx={{
        display: 'flex',
      }}
    >
      <CardActionArea>
        <Box sx={{ display: 'flex', height: '100%' }}>
          <CardMedia
            component='img'
            image={image}
            alt='Live from space album cover'
            sx={{
              p: 1,
              width: {
                xs: '150px',
                sm: '200px',
              },
              '&.MuiCardMedia-root': {
                objectFit: 'contain',
              },
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              display: 'inline-flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                component='div'
                sx={{ typography: { sm: 'h5', xs: 'h6' } }}
              >
                {name}
              </Typography>
              <Typography
                color='text.secondary'
                component='div'
                sx={{
                  typography: { sm: 'subtitle1', xs: 'subtitle2' },
                }}
              >
                {description}
              </Typography>
            </Box>
            <Box
              sx={{
                whiteSpace: 'nowrap',
                display: { sm: 'block', xs: 'none' },
                pl: 2,
              }}
            >
              {date}
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
