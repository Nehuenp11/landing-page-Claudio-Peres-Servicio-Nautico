export interface RiverStation {
  name: string;
  height: number; // metros
  variation: number; // variación en metros
  state: 'CRECE' | 'BAJA' | 'ESTABLE';
  lastReading: Date;
  alertLevel: number;
  evacuationLevel: number;
  color: 'green' | 'yellow' | 'red';
}

export interface RiverData {
  stations: Record<string, RiverStation>;
  lastUpdate: Date;
}

export interface RiverStationConfig {
  name: string;
  alertLevel: number;
  evacuationLevel: number;
}
