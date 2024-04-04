import React from 'react';
import Container from '@mui/material/Container';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';

const App = () => {

  return (
    <Container maxWidth="md">
      <Header />
      <HomePage />
      <Footer />
    </Container>
  );
};

export default App;
