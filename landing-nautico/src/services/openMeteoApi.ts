import type { WeatherInfo } from '../tipos/weather';
import type { WindInfo, WindForecast } from '../tipos/wind';
import { getWindCondition } from '../utils/conditions';

const COLON_COORDINATES = {
  latitude: -32.2249,
  longitude: -58.1411,
};

interface OpenMeteoForecastResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    cloud_cover: number;
    pressure_msl: number;
    visibility: number;
    precipitation: number;
  };
  hourly: {
    time: string[];
    wind_speed_10m: number[];
    wind_direction_10m: number[];
    wind_gusts_10m: number[];
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
  };
}

export const fetchWeatherData = async (): Promise<WeatherInfo> => {
  try {
    const params = new URLSearchParams({
      latitude: COLON_COORDINATES.latitude.toString(),
      longitude: COLON_COORDINATES.longitude.toString(),
      current:
        'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,pressure_msl,visibility',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max',
      timezone: 'America/Argentina/Buenos_Aires',
      forecast_days: '3',
    });

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data: OpenMeteoForecastResponse = await response.json();

    const forecast = data.daily.time.map((time, index) => ({
      date: new Date(time),
      maxTemp: data.daily.temperature_2m_max[index],
      minTemp: data.daily.temperature_2m_min[index],
      weatherCode: data.daily.weather_code[index],
      precipitationSum: data.daily.precipitation_sum[index],
      precipitationProbability: data.daily.precipitation_probability_max[index],
    }));

    return {
      current: {
        temperature: data.current.temperature_2m,
        apparentTemperature: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
        weatherCode: data.current.weather_code,
        cloudCover: data.current.cloud_cover,
        pressure: data.current.pressure_msl,
        visibility: data.current.visibility,
        precipitation: data.current.precipitation,
        timestamp: new Date(),
      },
      forecast,
      lastUpdate: new Date(),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchWindData = async (): Promise<WindInfo> => {
  try {
    const params = new URLSearchParams({
      latitude: COLON_COORDINATES.latitude.toString(),
      longitude: COLON_COORDINATES.longitude.toString(),
      hourly: 'wind_speed_10m,wind_direction_10m,wind_gusts_10m',
      timezone: 'America/Argentina/Buenos_Aires',
      forecast_days: '2',
    });

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching wind data: ${response.statusText}`);
    }

    const data: OpenMeteoForecastResponse = await response.json();

    // Usar los datos más recientes como viento actual
    const currentSpeed = data.hourly.wind_speed_10m[0] || 0;
    const currentDirection = data.hourly.wind_direction_10m[0] || 0;
    const currentGusts = data.hourly.wind_gusts_10m[0] || 0;

    // Crear pronóstico para las próximas 24 horas
    const forecast: WindForecast[] = data.hourly.time
      .slice(0, 24)
      .map((time, index) => ({
        time: new Date(time),
        speed: data.hourly.wind_speed_10m[index],
        direction: data.hourly.wind_direction_10m[index],
        gusts: data.hourly.wind_gusts_10m[index],
      }));

    const condition = getWindCondition(currentSpeed);

    return {
      current: {
        speed: currentSpeed,
        direction: currentDirection,
        gusts: currentGusts,
        condition,
        timestamp: new Date(),
      },
      forecast,
      lastUpdate: new Date(),
    };
  } catch (error) {
    console.error('Error fetching wind data:', error);
    throw error;
  }
};
