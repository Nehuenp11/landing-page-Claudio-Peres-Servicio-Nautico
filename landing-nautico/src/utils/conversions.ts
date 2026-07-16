// Conversiones de unidades
export const kmhToKnots = (kmh: number): number => {
  return kmh * 0.539957;
};

export const knotsToKmh = (knots: number): number => {
  return knots / 0.539957;
};

export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const formatTemperature = (temp: number, unit: 'C' | 'F' = 'C'): string => {
  return `${temp.toFixed(1)}°${unit}`;
};

export const formatWind = (kmh: number): { kmh: string; knots: string } => {
  return {
    kmh: `${kmh.toFixed(1)} km/h`,
    knots: `${kmhToKnots(kmh).toFixed(1)} nudos`,
  };
};

export const formatHeight = (height: number): string => {
  return `${height.toFixed(2)} m`;
};

export const formatDate = (date: Date, locale: string = 'es-AR'): string => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getWindDirection = (degrees: number): string => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};

export const getWindDirectionDegrees = (degrees: number): string => {
  return `${degrees.toFixed(0)}°`;
};
