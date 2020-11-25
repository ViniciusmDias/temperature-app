import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Hello Home</h1>
    </Container>
  );
};

export default Home;
