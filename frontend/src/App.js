import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieListPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
