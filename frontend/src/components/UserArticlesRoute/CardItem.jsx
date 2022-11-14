import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { format, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { openModal } from '../../features/modal/modalSlice.js';

const CardItem = ({ docId, image, name, description, updatedAt }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const date = useMemo(() => {
    const current = new Date(updatedAt);
    const pattern = isToday(current) ? 'p' : 'PPP';
    return format(current, pattern, { locale: ptBR });
  }, [updatedAt]);

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEditContent = () => {
    setAnchorEl(null);
    navigate(`/sec/${userId}/${docId}/editor`);
  };

  const handleEditMetadata = () => {
    setAnchorEl(null);
    dispatch(
      openModal({
        type: 'edit-metadata',
        meta: {
          title: 'Editar Metadados',
        },
        data: { docId, name, image, description },
      }),
    );
  };

  const handleRemoveArticle = () => {
    setAnchorEl(null);
    dispatch(
      openModal({
        type: 'delete-article',
        data: { docId, name },
      }),
    );
  };

  return (
    <Box>
      <Card
        variant='outlined'
        onClick={() => navigate(`/${userId}/${docId}/reader`)}
        sx={(theme) => ({
          '&:hover': {
            borderColor: theme.palette.primary.main,
            cursor: 'pointer',
          },
        })}
      >
        <CardMedia
          component='img'
          image={image}
          alt={name}
          sx={{
            flexGrow: 1,
            '&.MuiCardMedia-root': {
              display: 'block',
              objectFit: 'contain',
              height: '140px',
            },
          }}
        />
        <CardHeader
          action={
            <IconButton aria-label='settings' onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={date}
          titleTypographyProps={{
            variant: 'subtitle2',
            textOverflow: 'ellipsis',
            noWrap: true,
          }}
          subheaderTypographyProps={{ variant: 'caption' }}
          sx={{
            '.MuiCardHeader-content, .MuiCardHeader-action': {
              minWidth: 0,
              alignSelf: 'center',
            },
          }}
        />
      </Card>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        disableScrollLock
      >
        <MenuItem onClick={handleEditContent}>
          <ListItemIcon>
            <OpenInNewIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Editar Conteúdo</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleEditMetadata}>
          <ListItemIcon>
            <EditIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Editar Metadados</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleRemoveArticle}>
          <ListItemIcon>
            <DeleteOutlineIcon fontSize='small' color='error' />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ color: 'error' }}>
            Apagar
          </ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CardItem;
