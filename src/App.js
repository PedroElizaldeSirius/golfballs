import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
