import React from 'react';
import Header from '../../components/Header';
import SearchLocation from '../../components/SearchLocation';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchLocation />
    </Container>
  );
};

export default Home;
