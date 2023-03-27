import React from 'react';
import { Outlet } from 'react-router-dom';
import useClasses from '../../useClasses';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Menu from '../Menu/Menu';
import styles from './styles';

const Layout = () => {
  const { main, toolbar, content } = useClasses(styles);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>App</Typography>
        </Toolbar>
      </AppBar>

      <Box className={toolbar}></Box>

      <main className={main}>
        <Menu />
        <Box className={content}>
          <Outlet />
        </Box>
      </main>
    </>
  );
};

export default Layout;
