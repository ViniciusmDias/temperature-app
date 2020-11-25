/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import { googleApi } from '../../services/api';

import { Container, Form, Subtitle } from './styles';

export interface SearchLocationProps {
  setCity: Function;
  setState: Function;
  setLatitude: Function;
  setLongitude: Function;
}

const SearchLocation: React.FC<SearchLocationProps> = ({
  setLatitude,
  setLongitude,
  setCity,
  setState,
}: SearchLocationProps) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      googleApi
        .get(
          `/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
        )
        .then((response) => {
          console.log(response.data.results[0]);
          response.data.results[0].address_components.map((rep: any) => {
            rep.types.includes('administrative_area_level_2') &&
              setCity(rep.long_name);
            rep.types.includes('administrative_area_level_1') &&
              setState(rep.short_name);
            return console.log('Addresses founds');
          });
          setLatitude(response.data.results[0].geometry.location.lat);
          setLongitude(response.data.results[0].geometry.location.lng);
        });
    });
  }, []);

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
