import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useFindSpecificMatch } from '../../hooks/findMatch.js';

const CardItem = ({
  userId,
  docId,
  image,
  name,
  description,
  updatedAt,
  userName,
}) => {
  const { name: matchName } = useFindSpecificMatch({
    singleUser: '/articles',
  });
  const navigate = useNavigate();
  const date = useMemo(() => {
    let regex = /\s+([+])/g;
    const fixed = updatedAt.replace(regex, '$1');
    const current = new Date(fixed);
    const pattern = isToday(current) ? 'p' : 'PP';
    return format(current, pattern, { locale: ptBR });
  }, [updatedAt]);

  return (
    <Card
      onClick={() => navigate(`/${userId}/${docId}/reader`)}
      variant='outlined'
      sx={(theme) => ({
        display: 'flex',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          cursor: 'pointer',
        },
      })}
      data-cy='card-item'
    >
      <Box sx={{ flex: 1, display: 'flex', height: '100%' }}>
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              component='div'
              sx={{ typography: { sm: 'h5', xs: 'h6' }, width: '100%' }}
            >
              {name}
            </Typography>
            <Typography
              color='text.secondary'
              component='div'
              sx={{
                typography: { sm: 'subtitle1', xs: 'subtitle2' },
                width: '100%',
              }}
            >
              {description}
            </Typography>
            <CardActions sx={{ alignSelf: 'flex-end' }}>
              {matchName === 'singleUser' && (
                <Button
                  size='large'
                  variant='text'
                  color='inherit'
                  startIcon={
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: 'secondary.main',
                      }}
                    >
                      {userName.toUpperCase().charAt(0)}
                    </Avatar>
                  }
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/articles/${userId}`);
                  }}
                  sx={{ textTransform: 'none' }}
                  data-cy='card-item-user-btn'
                >
                  {userName}
                </Button>
              )}
            </CardActions>
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
    </Card>
  );
};

export default CardItem;
