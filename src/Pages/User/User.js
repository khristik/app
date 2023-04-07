import React from 'react';
import { Box } from '@mui/material';
import Card from '../../components/Card/Card';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const User = () => {
  return (
    <>
      <Box mb={1}>
        <Breadcrumbs />
      </Box>
      <Card />
    </>
  );
};
export default User;
