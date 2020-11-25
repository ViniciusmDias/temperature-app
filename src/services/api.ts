import axios from 'axios';

export const googleApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});
export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
