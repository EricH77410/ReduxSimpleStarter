import axios from 'axios';

const KEY = 'e2549b32995884d0571e1a954f3f0966';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = ROOT_URL+'&q='+city+',fr';
  const req = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: req
  }
}
