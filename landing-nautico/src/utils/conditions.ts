// Configuración de alertas para cada estación del Río Uruguay
export const RIVER_STATIONS_CONFIG = {
  Concordia: {
    name: 'Concordia',
    alertLevel: 11.5,
    evacuationLevel: 13.0,
  },
  Colón: {
    name: 'Colón',
    alertLevel: 7.0,
    evacuationLevel: 8.5,
  },
  'Concepción del Uruguay': {
    name: 'Concepción del Uruguay',
    alertLevel: 5.3,
    evacuationLevel: 6.3,
  },
  Gualeguaychú: {
    name: 'Gualeguaychú',
    alertLevel: 3.8,
    evacuationLevel: 4.8,
  },
};

export const getHeightStatus = (height: number, alertLevel: number, evacuationLevel: number): 'green' | 'yellow' | 'red' => {
  if (height >= evacuationLevel) return 'red';
  if (height >= alertLevel) return 'yellow';
  return 'green';
};

export const getHeightStatusText = (height: number, alertLevel: number, evacuationLevel: number): string => {
  if (height >= evacuationLevel) return 'EVACUACIÓN';
  if (height >= alertLevel) return 'ALERTA';
  return 'NORMAL';
};

export const getWindCondition = (speedKmh: number): 'APTO' | 'PRECAUCION' | 'NO_RECOMENDADO' => {
  const speedKnots = speedKmh * 0.539957;
  if (speedKnots > 30) return 'NO_RECOMENDADO';
  if (speedKnots >= 20) return 'PRECAUCION';
  return 'APTO';
};

export const getWindConditionText = (condition: 'APTO' | 'PRECAUCION' | 'NO_RECOMENDADO'): string => {
  const texts = {
    APTO: 'Apto para navegar',
    PRECAUCION: 'Con precaución',
    NO_RECOMENDADO: 'No recomendado',
  };
  return texts[condition];
};

export const getWeatherDescription = (weatherCode: number): { icon: string; description: string } => {
  // WMO Weather interpretation codes
  const weatherCodes: Record<number, { icon: string; description: string }> = {
    0: { icon: '☀️', description: 'Despejado' },
    1: { icon: '🌤️', description: 'Mayormente despejado' },
    2: { icon: '⛅', description: 'Parcialmente nublado' },
    3: { icon: '☁️', description: 'Nublado' },
    45: { icon: '🌫️', description: 'Niebla' },
    48: { icon: '🌫️', description: 'Niebla con escarcha' },
    51: { icon: '🌧️', description: 'Llovizna ligera' },
    53: { icon: '🌧️', description: 'Llovizna moderada' },
    55: { icon: '🌧️', description: 'Llovizna densa' },
    61: { icon: '🌧️', description: 'Lluvia ligera' },
    63: { icon: '🌧️', description: 'Lluvia moderada' },
    65: { icon: '⛈️', description: 'Lluvia fuerte' },
    71: { icon: '❄️', description: 'Nieve ligera' },
    73: { icon: '❄️', description: 'Nieve moderada' },
    75: { icon: '❄️', description: 'Nieve fuerte' },
    77: { icon: '❄️', description: 'Granos de nieve' },
    80: { icon: '🌧️', description: 'Lluvia ligera intermitente' },
    81: { icon: '🌧️', description: 'Lluvia moderada intermitente' },
    82: { icon: '⛈️', description: 'Lluvia fuerte intermitente' },
    85: { icon: '❄️', description: 'Aguanieve ligera' },
    86: { icon: '❄️', description: 'Aguanieve fuerte' },
    95: { icon: '⛈️', description: 'Tormenta' },
    96: { icon: '⛈️', description: 'Tormenta con granizo ligero' },
    99: { icon: '⛈️', description: 'Tormenta con granizo fuerte' },
  };

  return weatherCodes[weatherCode] || { icon: '❓', description: 'Desconocido' };
};
