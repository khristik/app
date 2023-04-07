import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserInfo from './Pages/UserInfo/UserInfo';
import Tasks from './Pages/Tasks';
import Users from './Pages/Users/Users';
import User from './Pages/User/User';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/*<Route index element={<Homepage />} />*/}
      <Route path='users' element={<Users />} />
      <Route path='users/:userId' element={<User />} />
      <Route index element={<UserInfo />} />

      {/*<Route path="user-info" element={<UserInfo />} />*/}

      <Route path='tasks' element={<Tasks />} />
      <Route path='*' element={<div>Error</div>} />
    </Route>,
  ),
);

export default router;
