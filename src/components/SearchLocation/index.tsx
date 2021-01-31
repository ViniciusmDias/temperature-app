import React, { useEffect, useState } from 'react';
import { FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import { googleApi } from '../../services/api';
import Button from '../Button';

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
      async function loadLocation() {
        const response = await googleApi.get(
          `/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
        );
        setLatitude(response.data.results[0].geometry.location.lat);
        setLongitude(response.data.results[0].geometry.location.lng);

        const address = response.data.results[0].address_components;

        for (let i = 0; i < address.length; i++) {
          address[i].types.includes('administrative_area_level_2') &&
            setCity(address[i].long_name);
          address[i].types.includes('administrative_area_level_1') &&
            setState(address[i].short_name);
        }
      }
      loadLocation();
    });
  }, [setLatitude, setLongitude, setCity, setState]);

  async function searchLocation(
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
    value: string,
  ) {
    e.preventDefault();
    if (!value) {
      setInputError(
        'Digite o nome da cidade ou código postal antes de continuar.',
      );
      return;
    }

    const response = await googleApi.get(
      `/json?address=${value}&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
    );

    if (response.data.results[0]) {
      const address = response.data.results[0].address_components;

      for (let i = 0; i < address.length; i++) {
        address[i].types.includes('administrative_area_level_2') &&
          setCity(address[i].long_name);
        address[i].types.includes('administrative_area_level_1') &&
          setState(address[i].short_name);
      }

      setLatitude(response.data.results[0].geometry.location.lat);
      setLongitude(response.data.results[0].geometry.location.lng);
      setInputError('');
    } else {
      setInputError('Coloque um endereço válido!');
    }
  }

  return (
    <Container data-testid="searchlocation-container">
      <Form hasError={!!inputError}>
        <Button type="submit" onClick={(e) => searchLocation(e, input)}>
          <FaLocationArrow size={20} />
        </Button>
        <input
          placeholder="Digite aqui a sua localização."
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              searchLocation(e, input);
            }
          }}
        />
        <Button type="submit" onClick={(e) => searchLocation(e, input)}>
          <FaSearchLocation size={20} color="#fff" />
        </Button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Subtitle hasError={!!inputError}>
        Coloque o endereço, nome da cidade (com o Estado, para melhor precisão)
        ou o código postal.
      </Subtitle>
    </Container>
  );
};

export default SearchLocation;
