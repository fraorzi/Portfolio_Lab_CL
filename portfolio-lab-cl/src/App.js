import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './scss/main.scss';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
  );
}

export default App;
