import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;