export interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  weatherCode: number;
  cloudCover: number;
  pressure: number;
  visibility: number;
  precipitation: number;
  timestamp: Date;
}

export interface DailyWeatherForecast {
  date: Date;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
  precipitationSum: number;
  precipitationProbability: number;
}

export interface WeatherInfo {
  current: CurrentWeather;
  forecast: DailyWeatherForecast[];
  lastUpdate: Date;
}

export interface WeatherDescription {
  icon: string;
  description: string;
}
