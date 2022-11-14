import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useFetcher } from 'react-router-dom';

import {
  selectCredentials,
  removeCredentials,
} from '../../features/auth/authSlice.js';

const UserMenu = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { name, id: userId } = useSelector(selectCredentials);

  const handleOpenMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <Button
        size='large'
        variant='text'
        color='inherit'
        startIcon={
          <Avatar sx={{ width: 30, height: 30, bgcolor: 'secondary.main' }}>
            {name.toUpperCase().charAt(0)}
          </Avatar>
        }
        endIcon={<ExpandMoreIcon />}
        onClick={handleOpenMenu}
        sx={{ textTransform: 'none' }}
      >
        {name}
      </Button>
      <Menu
        id='menu-appbar'
        anchorEl={menuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(menuAnchor)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            navigate(`/${userId}/articles`);
            setMenuAnchor(null);
          }}
        >
          <ListItemIcon>
            <HomeIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText>Meus Artigos</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            fetcher.submit(null, {
              method: 'get',
              action: '',
            });
            // dispatch(removeCredentials());
            setMenuAnchor(null);
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize='small' color='error' />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ color: 'error' }}>
            Sair
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
