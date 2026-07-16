import { useState, useEffect } from 'react';
import type { WindInfo } from '../tipos/wind';
import { fetchWindData } from '../services/openMeteoApi';

interface UseWindDataState {
  data: WindInfo | null;
  loading: boolean;
  error: Error | null;
}

export const useWindData = (refreshInterval: number = 30 * 60 * 1000) => {
  const [state, setState] = useState<UseWindDataState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const data = await fetchWindData();
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
