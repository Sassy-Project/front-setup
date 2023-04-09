import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './common/Header';
import Footer from './common/Footer';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/*' element={<MainPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Routing;
