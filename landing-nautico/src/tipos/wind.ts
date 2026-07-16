export interface WindData {
  speed: number; // km/h
  direction: number; // grados (0-360)
  gusts: number; // km/h
  condition: 'APTO' | 'PRECAUCION' | 'NO_RECOMENDADO';
  timestamp: Date;
}

export interface WindForecast {
  time: Date;
  speed: number; // km/h
  direction: number;
  gusts: number;
}

export interface WindInfo {
  current: WindData;
  forecast: WindForecast[];
  lastUpdate: Date;
}
