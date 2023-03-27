import React from 'react';
import { Typography, Box } from '@mui/material';
import useClasses from '../../useClasses';
import styles from './styles';

const Menu = () => {
  const { root } = useClasses(styles);
  return (
    <Box className={root}>
      <div>
        <Typography variant='h5'>Menu</Typography>
      </div>
    </Box>
  );
};

export default Menu;
