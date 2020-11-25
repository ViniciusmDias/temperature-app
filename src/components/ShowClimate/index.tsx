/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';

import api from 'axios';
import { Container } from './styles';

interface WeatherProps {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
}

interface Weathers {
  dt: number;
  hour: number;
  weather: any[];
  temp: number;
  // eslint-disable-next-line camelcase
  feels_like: number;
  humidity: number;
}

const ShowClimate: React.FC<WeatherProps> = ({
  latitude,
  longitude,
  city,
  state,
}: WeatherProps) => {
  const [weathers, setWeathers] = useState<Weathers[]>([]);

  /* Request when input is clicked */
  useEffect(() => {
    api
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily&units=metric&appid=52219e46da1db33cf0ad6c6b4cb4d908`,
      )
      .then((response: any) => {
        setWeathers(response.data.hourly.slice(0, 6));
      });
  }, [latitude, longitude]);

  return (
    <Container>
      <h1>
        {weathers
          .slice(0, 1)
          .map(
            (weather) =>
              `${weather.weather[0].description} currently in ${city} in ${state}. The temperature is ${weather.temp} °C`,
          )}
      </h1>
      <div>
        <ul>
          <li />
          <li>Condition</li>
          <li>Temperature</li>
          <li>Feels Like</li>
          <li>Humidity</li>
        </ul>

        {weathers.map((weather) => (
          <ul key={weather.dt}>
            {/* Am/Pm logical */}
            <li>
              {(weather.hour = new Date(weather.dt * 1000).getHours()) - 12 < 0
                ? ((weather.hour = new Date(weather.dt * 1000).getHours()) -
                    12) *
                  -1
                : (weather.hour = new Date(weather.dt * 1000).getHours()) - 12}

              {(weather.hour = new Date(weather.dt * 1000).getHours()) - 12 <
              0 ? (
                <span>:00 am</span>
              ) : (
                <span>:00 pm</span>
              )}
            </li>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icons based on temperature"
            />
            <li>{weather.temp} °C</li>
            <li>{weather.feels_like} °C</li>
            <li>{weather.humidity} %</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};
export default ShowClimate;
