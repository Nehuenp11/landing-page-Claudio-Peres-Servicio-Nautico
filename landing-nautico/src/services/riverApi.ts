import type { RiverData, RiverStation } from '../tipos/river';
import { RIVER_STATIONS_CONFIG, getHeightStatus } from '../utils/conditions';

// Parsear la respuesta HTML de CARU y extraer los datos del río
const parseCAruHtml = (html: string): Record<string, RiverStation> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const stations: Record<string, RiverStation> = {};

  // Buscar la tabla con los datos
  const rows = doc.querySelectorAll('table tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 4) {
      const stationName = cells[0]?.textContent?.trim() || '';
      const heightText = cells[1]?.textContent?.trim() || '0';
      const variationText = cells[2]?.textContent?.trim() || '0';

      // Buscar si es una estación que monitoreamos
      const config = Object.values(RIVER_STATIONS_CONFIG).find(
        (c) => c.name.toLowerCase() === stationName.toLowerCase()
      );

      if (config) {
        const height = parseFloat(heightText.replace(',', '.'));
        const variation = parseFloat(variationText.replace(',', '.'));

        const color = getHeightStatus(height, config.alertLevel, config.evacuationLevel);

        // Determinar el estado (CRECE/BAJA/ESTABLE)
        let state: 'CRECE' | 'BAJA' | 'ESTABLE' = 'ESTABLE';
        if (variation > 0.05) state = 'CRECE';
        else if (variation < -0.05) state = 'BAJA';

        stations[config.name] = {
          name: config.name,
          height,
          variation,
          state,
          lastReading: new Date(),
          alertLevel: config.alertLevel,
          evacuationLevel: config.evacuationLevel,
          color,
        };
      }
    }
  });

  return stations;
};

export const fetchRiverData = async (): Promise<RiverData> => {
  try {
    const response = await fetch('/api/alturas');

    if (!response.ok) {
      throw new Error(`Error fetching CARU data: ${response.statusText}`);
    }

    const html = await response.text();
    const stations = parseCAruHtml(html);

    // Si no se encontraron estaciones, devolver datos por defecto
    if (Object.keys(stations).length === 0) {
      return {
        stations: Object.values(RIVER_STATIONS_CONFIG).reduce(
          (acc, config) => {
            acc[config.name] = {
              name: config.name,
              height: 5.0,
              variation: 0,
              state: 'ESTABLE',
              lastReading: new Date(),
              alertLevel: config.alertLevel,
              evacuationLevel: config.evacuationLevel,
              color: 'green',
            };
            return acc;
          },
          {} as Record<string, RiverStation>
        ),
        lastUpdate: new Date(),
      };
    }

    return {
      stations,
      lastUpdate: new Date(),
    };
  } catch (error) {
    console.error('Error fetching river data:', error);

    // Fallback: devolver datos por defecto
    return {
      stations: Object.values(RIVER_STATIONS_CONFIG).reduce(
        (acc, config) => {
          acc[config.name] = {
            name: config.name,
            height: 5.0,
            variation: 0,
            state: 'ESTABLE',
            lastReading: new Date(),
            alertLevel: config.alertLevel,
            evacuationLevel: config.evacuationLevel,
            color: 'green',
          };
          return acc;
        },
        {} as Record<string, RiverStation>
      ),
      lastUpdate: new Date(),
    };
  }
};
