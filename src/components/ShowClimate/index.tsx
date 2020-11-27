import React, { useState, useEffect } from 'react';

import { openWeatherApi } from '../../services/api';
import Loading from '../Loading';
import { Container, Weather } from './styles';

interface LocationProps {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

interface WeatherProps {
  icon: string;
  id: number;
  main: string;
  description: string;
}

interface ClimateProps {
  dt: number;
  hour: number;
  weather: WeatherProps[];
  temp: number;
  feels_like: number;
  humidity: number;
}

const ShowClimate: React.FC<LocationProps> = ({
  latitude = -27.5969,
  longitude = -48.5495,
  city = 'florianópolis',
  state = 'SC',
}: LocationProps) => {
  const [loading, setLoading] = useState(true);
  const [weathers, setWeathers] = useState<ClimateProps[]>([]);

  useEffect(() => {
    setLoading(true);
    async function loadData() {
      const response = await openWeatherApi.get(
        `/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=metric&appid=52219e46da1db33cf0ad6c6b4cb4d908`,
      );
      setWeathers(response.data.hourly.slice(0, 6));
      setLoading(false);
    }
    loadData();
  }, [latitude, longitude]);

  const datatimeToHour = ({ dt }: ClimateProps) =>
    new Date(dt * 1000).getHours() - 12 < 0
      ? (new Date(dt * 1000).getHours() - 12) * -1
      : new Date(dt * 1000).getHours() - 12;

  const convertHourToAmPmFormat = ({ dt }: ClimateProps) =>
    new Date(dt * 1000).getHours() - 12 < 0 ? (
      <strong>:00 am</strong>
    ) : (
      <strong>:00 pm</strong>
    );

  return (
    <Container data-testid="showclimate-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>
            {`${weathers[0].weather[0].description} currently in ${city} in ${state}. The temperature is ${weathers[0].temp} °C`}
          </h1>
          {loading ? (
            <Loading />
          ) : (
            <Weather>
              <ul>
                <li />
                <li>Condition</li>
                <li>Temperature</li>
                <li>Feels Like</li>
                <li>Humidity</li>
              </ul>

              {weathers.map((weather) => (
                <ul key={weather.dt}>
                  <li>
                    {datatimeToHour(weather)}
                    {convertHourToAmPmFormat(weather)}
                  </li>
                  <li>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="Weather icons based on temperature"
                    />
                    <span>{weather.weather[0].description}</span>
                  </li>
                  <li>{weather.temp} °C</li>
                  <li>{weather.feels_like} °C</li>
                  <li>{weather.humidity} %</li>
                </ul>
              ))}
            </Weather>
          )}
        </>
      )}
    </Container>
  );
};
export default ShowClimate;
