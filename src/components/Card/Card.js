import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { userInfo, basicUserInfo } from './constants';

import styles from './styles';

import useClasses from '../../useClasses';
import { fetchUser } from '../../api';

const Card = () => {
  const [user, setUser] = useState('');
  const { card, avatarBlock, infoBlock, avatarImage, informationBlock } = useClasses(styles);

  useEffect(() => {
    fetchUser(1)
      .then((res) => setUser(res))
      .catch((error) => console.log('Error:', error));
  }, []);

  return (
    <Box p={3} className={card}>
      <div className={infoBlock}>
        {userInfo.map((item) => {
          const value = user[item.id];
          const key = item.id;

          return key !== 'img' ? (
            <Typography key={key} {...(key === 'name' ? { variant: 'h6' } : {})}>
              {item.label && item.label} {value}
            </Typography>
          ) : (
            <div className={avatarBlock}>
              <img src={user[key]} alt='Avatar' className={avatarImage} />
            </div>
          );
        })}
      </div>

      <Divider orientation='vertical' flexItem sx={{ mx: 3 }} />

      <div className={informationBlock}>
        <Typography component='p' color={'primary'} gutterBottom sx={{ fontWeight: 600 }}>
          Basic Information
        </Typography>
        <Table cols={basicUserInfo} rows={[user]} />
        <Typography component='p' color={'primary'} gutterBottom sx={{ fontWeight: 600 }}>
          Company (Personal) Information
        </Typography>
        <Table cols={basicUserInfo} rows={[user]} />
        <Typography component='p' color={'primary'} gutterBottom sx={{ fontWeight: 600 }}>
          Occupation Information
        </Typography>
        <Table cols={basicUserInfo} rows={[user]} />
        {/*<TableRow obj={information}/>*/}
      </div>
    </Box>
  );
};

export default Card;
