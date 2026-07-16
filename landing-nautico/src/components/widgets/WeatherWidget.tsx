import { useWeatherData } from '../../hooks/useWeatherData';
import { formatTemperature, formatDate } from '../../utils/conversions';
import { getWeatherDescription } from '../../utils/conditions';

export const WeatherWidget = () => {
  const { data, loading, error } = useWeatherData(30 * 60 * 1000); // Refresh every 30 minutes

  if (loading && !data) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌤️</span>
          <h2 className="text-xl font-bold text-white">Clima General</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-slate-400">Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 border border-red-500">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌤️</span>
          <h2 className="text-xl font-bold text-white">Clima General</h2>
        </div>
        <div className="text-center py-8">
          <p className="text-red-400">Error al cargar datos. Intenta más tarde.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🌤️</span>
        <h2 className="text-xl font-bold text-white">Clima General</h2>
      </div>

      {data && (
        <div className="space-y-6">
          {/* Current weather section */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Condiciones Actuales</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weather display */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">
                  {getWeatherDescription(data.current.weatherCode).icon}
                </div>
                <p className="text-white text-lg font-semibold mb-4 text-center">
                  {getWeatherDescription(data.current.weatherCode).description}
                </p>
              </div>

              {/* Temperature and humidity */}
              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Temperatura</p>
                  <p className="text-white text-3xl font-bold">
                    {formatTemperature(data.current.temperature, 'C')}
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Sensación Térmica</p>
                  <p className="text-white text-2xl font-bold">
                    {formatTemperature(data.current.apparentTemperature, 'C')}
                  </p>
                </div>

                <div className="bg-slate-900/50 rounded p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Humedad</p>
                  <p className="text-white text-2xl font-bold">{data.current.humidity}%</p>
                </div>
              </div>
            </div>

            {/* Additional details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-700">
              <div className="bg-slate-900/50 rounded p-3 border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Presión</p>
                <p className="text-white font-bold text-sm">{data.current.pressure} hPa</p>
              </div>

              <div className="bg-slate-900/50 rounded p-3 border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Visibilidad</p>
                <p className="text-white font-bold text-sm">
                  {(data.current.visibility / 1000).toFixed(1)} km
                </p>
              </div>

              <div className="bg-slate-900/50 rounded p-3 border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Nubosidad</p>
                <p className="text-white font-bold text-sm">{data.current.cloudCover}%</p>
              </div>

              <div className="bg-slate-900/50 rounded p-3 border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Precipitación</p>
                <p className="text-white font-bold text-sm">{data.current.precipitation} mm</p>
              </div>
            </div>
          </div>

          {/* 3-day forecast section */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Pronóstico - 3 Días</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.forecast.map((day, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded p-4 border border-slate-700 text-center"
                >
                  <p className="text-slate-300 font-semibold mb-2">
                    {day.date.toLocaleDateString('es-AR', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>

                  <div className="text-3xl my-2">
                    {getWeatherDescription(day.weatherCode).icon}
                  </div>

                  <p className="text-xs text-slate-400 mb-2">
                    {getWeatherDescription(day.weatherCode).description}
                  </p>

                  <div className="flex justify-center gap-2 mb-3">
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Máx</p>
                      <p className="text-white font-bold">
                        {formatTemperature(day.maxTemp, 'C')}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-slate-700" />
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Mín</p>
                      <p className="text-white font-bold">
                        {formatTemperature(day.minTemp, 'C')}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-2">
                    <p className="text-xs text-slate-400 mb-1">Lluvia</p>
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-white font-semibold">
                        {day.precipitationSum.toFixed(1)} mm
                      </span>
                      <span className="text-blue-300 text-xs">
                        {day.precipitationProbability}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {data.lastUpdate && (
            <p className="text-xs text-slate-500 text-center">
              Actualizado: {formatDate(data.lastUpdate)}
            </p>
          )}

          {error && (
            <p className="text-xs text-yellow-400 text-center">
              Mostrando datos en caché. Hubo un error al actualizar.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
