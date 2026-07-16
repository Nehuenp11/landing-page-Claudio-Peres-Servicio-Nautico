import { useWindData } from '../../hooks/useWindData';
import { formatWind, getWindDirection, getWindDirectionDegrees } from '../../utils/conversions';
import { getWindConditionText } from '../../utils/conditions';

export const WindChartWidget = () => {
  const { data, loading, error } = useWindData(30 * 60 * 1000); // Refresh every 30 minutes

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'APTO':
        return 'text-green-400 bg-green-500/20';
      case 'PRECAUCION':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'NO_RECOMENDADO':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-slate-400 bg-slate-500/20';
    }
  };

  if (loading && !data) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">💨</span>
          <h2 className="text-xl font-bold text-white">Carta de Vientos</h2>
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
          <span className="text-2xl">💨</span>
          <h2 className="text-xl font-bold text-white">Carta de Vientos</h2>
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
        <span className="text-2xl">💨</span>
        <h2 className="text-xl font-bold text-white">Carta de Vientos</h2>
      </div>

      {data && (
        <div className="space-y-6">
          {/* Current wind section */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Condiciones Actuales</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Wind rose / compass visual */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-900/50 mb-4">
                  {/* Compass points */}
                  <div className="absolute top-2 text-slate-400 text-sm font-bold">N</div>
                  <div className="absolute right-2 text-slate-400 text-sm font-bold">E</div>
                  <div className="absolute bottom-2 text-slate-400 text-sm font-bold">S</div>
                  <div className="absolute left-2 text-slate-400 text-sm font-bold">W</div>

                  {/* Wind direction indicator */}
                  <div
                    className="absolute w-1 h-16 bg-gradient-to-t from-blue-500 to-blue-300 origin-bottom transition-transform"
                    style={{
                      transform: `rotate(${data.current.direction}deg)`,
                    }}
                  />
                  <div className="w-4 h-4 rounded-full bg-blue-500" />
                </div>

                <div className="text-center">
                  <p className="text-slate-300 text-sm">Dirección</p>
                  <p className="text-white text-xl font-bold">
                    {getWindDirection(data.current.direction)} {getWindDirectionDegrees(data.current.direction)}
                  </p>
                </div>
              </div>

              {/* Wind data details */}
              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Velocidad del Viento</p>
                  <p className="text-white text-2xl font-bold">
                    {formatWind(data.current.speed).kmh}
                  </p>
                  <p className="text-blue-300 text-sm">{formatWind(data.current.speed).knots}</p>
                </div>

                <div className="bg-slate-900/50 rounded p-4 border border-slate-700">
                  <p className="text-slate-400 text-sm mb-2">Ráfagas Máximas</p>
                  <p className="text-white text-2xl font-bold">
                    {formatWind(data.current.gusts).kmh}
                  </p>
                  <p className="text-blue-300 text-sm">{formatWind(data.current.gusts).knots}</p>
                </div>

                <div
                  className={`rounded p-4 border-2 font-bold text-center text-lg ${getConditionColor(
                    data.current.condition
                  )}`}
                >
                  {getWindConditionText(data.current.condition)}
                </div>
              </div>
            </div>
          </div>

          {/* Forecast section */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Pronóstico - Próximas 12 Horas</h3>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {data.forecast.slice(0, 12).map((hour, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded p-3 border border-slate-700 text-center"
                >
                  <p className="text-xs text-slate-400 mb-2">
                    {hour.time.getHours()}:00
                  </p>
                  <p className="text-sm font-bold text-white mb-2">
                    {hour.speed.toFixed(1)} km/h
                  </p>
                  <div className="text-xs text-blue-300">
                    {(hour.direction).toFixed(0)}°
                  </div>
                </div>
              ))}
            </div>
          </div>

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
