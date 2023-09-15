import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from "./components/Container/Container";
import MainPage from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './scss/main.scss';

function App() {
  return (
      <Container>
          <Router>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<MainPage />} />
              </Routes>
          </Router>
      </Container>
  );
}

export default App;
