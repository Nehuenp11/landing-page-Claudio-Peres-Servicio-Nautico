import { useState, useEffect } from 'react';
import type { RiverData } from '../tipos/river';
import { fetchRiverData } from '../services/riverApi';

interface UseRiverDataState {
  data: RiverData | null;
  loading: boolean;
  error: Error | null;
}

export const useRiverData = (refreshInterval: number = 30 * 60 * 1000) => {
  const [state, setState] = useState<UseRiverDataState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        const data = await fetchRiverData();
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
