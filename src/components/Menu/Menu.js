import React from 'react';
import { Typography, Box, ListItemIcon, ListItemText, ListItemButton, List } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../Layout/constants';
import useClasses from '../../useClasses';
import styles from './styles';

const Menu = () => {
  const { root, active, nonActive, link, iconMenu, textMenu } = useClasses(styles);

  return (
    <Box className={root}>
      <div>
        <Typography variant='h5'>Menu</Typography>
      </div>

      <div>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItemButton
                key={item.text}
                //onClick={() => history.push(item.path)}
                //className={location.pathname === item.path ? styles.active : null}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? `${link} ${active}` : `${link} ${nonActive}`)}
                >
                  <ListItemIcon classes={{ root: iconMenu }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} classes={{ root: textMenu }} />
                </NavLink>
              </ListItemButton>
            );
          })}
        </List>
      </div>
    </Box>
  );
};

export default Menu;
