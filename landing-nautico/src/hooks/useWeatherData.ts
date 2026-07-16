import { useState, useEffect } from 'react';
import type { WeatherInfo } from '../tipos/weather';
import { fetchWeatherData } from '../services/openMeteoApi';

interface UseWeatherDataState {
  data: WeatherInfo | null;
  loading: boolean;
  error: Error | null;
}

export const useWeatherData = (refreshInterval: number = 30 * 60 * 1000) => {
  const [state, setState] = useState<UseWeatherDataState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const data = await fetchWeatherData();
        setState((prev) => ({ ...prev, data, loading: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: error instanceof Error ? error : new Error('Unknown error'),
          loading: false,
        }));
      }
    };

    fetchData();

    const interval = setInterval(fetchData, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return state;
};
