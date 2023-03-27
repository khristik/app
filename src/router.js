import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='*' element={<div>Error</div>} />
    </Route>,
  ),
);

export default router;
