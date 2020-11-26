/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import { googleApi } from '../../services/api';

import { Container, Form, Subtitle, Error } from './styles';

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
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      googleApi
        .get(
          `/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
        )
        .then((response) => {
          setLatitude(response.data.results[0].geometry.location.lat);
          setLongitude(response.data.results[0].geometry.location.lng);
          response.data.results[0].address_components.map((rep: any) => {
            rep.types.includes('administrative_area_level_2') &&
              setCity(rep.long_name);
            rep.types.includes('administrative_area_level_1') &&
              setState(rep.short_name);
            return console.log('Addresses founds');
          });
        });
    });
  }, []);

  async function searchLocation(e: any, value: string) {
    e.preventDefault();
    if (!value) {
      setInputError('Type city name or zip code in box text above to continue');
      return;
    }

    const response = await googleApi.get(
      `/json?address=${value}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
    );

    /* data processing for request response */
    response.data.results[0].address_components.map((rep: any) => {
      rep.types.includes('administrative_area_level_2') &&
        setCity(rep.long_name);
      rep.types.includes('administrative_area_level_1') &&
        setState(rep.short_name);
      return console.log('Addresses founds');
    });
    setLatitude(response.data.results[0].geometry.location.lat);
    setLongitude(response.data.results[0].geometry.location.lng);
    setInputError('');
  }

  return (
    <Container data-testid="search-container">
      <Form hasError={!!inputError}>
        <button type="submit" onClick={(e) => searchLocation(e, input)}>
          <FaLocationArrow size={20} />
        </button>
        <input
          placeholder="Type here our location"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchLocation(e, input);
            }
          }}
        />
        <button type="submit">
          <FaSearchLocation size={20} color="#fff" />
        </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Subtitle hasError={!!inputError}>
        Enter the address, city name (*with State, for more precision) or zip
        code to get the weather forecast
      </Subtitle>
    </Container>
  );
};

export default SearchLocation;
