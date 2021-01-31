/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect } from 'react';

import { CgArrowLongUpR } from 'react-icons/cg';
import { openWeatherApi } from '../../services/api';
import Loading from '../Loading';
import { Container, Weather } from './styles';

interface LocationProps {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

interface CurrentProps {
  sunrise: number;
  sunset: number;
  temp: number;
  wind_speed: number;
  wind_deg: number;
}

const ShowClimate: React.FC<LocationProps> = ({
  latitude = -27.5969,
  longitude = -48.5495,
  city = 'florianópolis',
  state = 'SC',
}: LocationProps) => {
  const apiKey = '53784de0feccd9f2bac24296dba5348d';

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<CurrentProps>({
    sunrise: 1,
    sunset: 1,
    temp: 1,
    wind_speed: 1,
    wind_deg: 1,
  });

  const beachs = [
    {
      id: 1,
      latitude: -27.60313285,
      longitude: -48.43333368,
      name: 'Praia Mole',
    },
    {
      id: 2,
      latitude: -27.71464786,
      longitude: -48.50172043,
      name: 'Morro das Pedras',
    },
  ];

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      const response = await openWeatherApi.get(
        `/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,daily,minutely,alerts&appid=${apiKey}`,
      );
      setLocation(response.data.current);
      setLoading(false);
    }
    loadData();
  }, [latitude, longitude]);

  const convertDegreInDirection = (value: number) => {
    return value > 180 ? value - 180 : value + 180;
  };

  const convertMeterPerSecToKmPerHour = (value: number) => {
    return value * 3.6;
  };

  const convertTimestampToHour = (value: number) => {
    const date = new Date(value * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  };

  const handleLatAndLong = (index: any) => {
    const lat = beachs[index].latitude;
    const long = beachs[index].longitude;

    openWeatherApi
      .get(
        `/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,daily,minutely,alerts&appid=${apiKey}`,
      )
      .then((res: any) => {
        setLocation(res.data.current);
        setLoading(false);
      });
  };

  return (
    <Container data-testid="showclimate-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>
            Você está em {city} no estado de {state}
          </h1>
          <div className="input">
            <h3>Praias</h3>
            <select
              onChange={(e) => {
                handleLatAndLong(e.target.value);
              }}
            >
              <option value="" defaultValue="Escolha uma Praia" hidden>
                Escolha uma Praia
              </option>
              <option key={beachs[0].id} value={0}>
                {beachs[0].name}
              </option>
              <option key={beachs[1].id} value={1}>
                {beachs[1].name}
              </option>
            </select>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <Weather degree={convertDegreInDirection(location.wind_deg)}>
              <h2>Vento soprando na direção {location.wind_deg} degree</h2>
              <CgArrowLongUpR />

              <p>
                Com a velocidade de{' '}
                {convertMeterPerSecToKmPerHour(location.wind_speed)}km/h.
              </p>
              <p>O sol nasceu as {convertTimestampToHour(location.sunrise)}</p>
              <p>
                O sol vai se por as {convertTimestampToHour(location.sunset)}
              </p>
              <p>
                A temperatura atual na sua localização é de: {location.temp}ºC
              </p>
            </Weather>
          )}
        </>
      )}
    </Container>
  );
};
export default ShowClimate;
