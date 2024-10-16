import React, { useState } from 'react';
import Header from '../../components/Header';
import SearchLocation from '../../components/SearchLocation';
import ShowClimate from '../../components/ShowClimate';

import { Container } from './styles';

const Home: React.FC = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  return (
    <Container data-testid="home-container">
      <Header />
      <SearchLocation
        setCity={setCity}
        setState={setState}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      {city && (
        <ShowClimate
          latitude={latitude}
          longitude={longitude}
          city={city}
          state={state}
        />
      )}
    </Container>
  );
};

export default Home;
