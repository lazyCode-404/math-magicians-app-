/* eslint-disable import/extensions */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quote from './pages/Quotes';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home key="home" />} />
      <Route path="/calculator" element={<Calculate key="Calculate-Nav" />} />
      <Route path="/quotes" element={<Quote key="Quotes" />} />
    </Routes>
  </>
);

export default App;