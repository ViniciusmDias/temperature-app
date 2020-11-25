import React from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';

import { Container, Form, Subtitle } from './styles';

const SearchLocation: React.FC = () => {
  return (
    <Container data-testid="search-container">
      <Form>
        <button type="submit">
          <FaLocationArrow size={20} />
        </button>
        <input
          placeholder="Type here our location"
          type="text"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              //
            }
          }}
        />
        <button type="submit">
          <FaSearchLocation size={20} color="#fff" />
        </button>
      </Form>

      <Subtitle>
        Enter the address, city name (*with State, for more precision) or zip
        code to get the weather forecast
      </Subtitle>
    </Container>
  );
};

export default SearchLocation;
