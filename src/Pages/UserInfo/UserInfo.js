import React from 'react';
import Card from '../../components/Card/Card';
import { Box } from '@mui/material';
import useClasses from '../../useClasses';
import styles from './styles';

const UserInfo = () => {
  const { root } = useClasses(styles);
  return (
    <Box classes={{ root: root }}>
      <Card />
    </Box>
  );
};

export default UserInfo;
