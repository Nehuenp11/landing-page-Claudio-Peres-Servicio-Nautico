import { useRiverData } from '../../hooks/useRiverData';
import { formatHeight, formatDate } from '../../utils/conversions';
import { getHeightStatusText } from '../../utils/conditions';

export const RiverHeightWidget = () => {
  const { data, loading, error } = useRiverData(30 * 60 * 1000); // Refresh every 30 minutes

  if (loading && !data) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🌊</span>
          <h2 className="text-xl font-bold text-white">Altura del Río Uruguay</h2>
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
          <span className="text-2xl">🌊</span>
          <h2 className="text-xl font-bold text-white">Altura del Río Uruguay</h2>
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
        <span className="text-2xl">🌊</span>
        <h2 className="text-xl font-bold text-white">Altura del Río Uruguay</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data &&
          Object.values(data.stations).map((station) => {
            const statusColors = {
              green: 'border-green-500 bg-green-50/10',
              yellow: 'border-yellow-500 bg-yellow-50/10',
              red: 'border-red-500 bg-red-50/10',
            };

            const statusTextColors = {
              green: 'text-green-400',
              yellow: 'text-yellow-400',
              red: 'text-red-400',
            };

            const statusBgColors = {
              green: 'bg-green-500/20',
              yellow: 'bg-yellow-500/20',
              red: 'bg-red-500/20',
            };

            return (
              <div
                key={station.name}
                className={`rounded-lg border-2 p-4 transition-all ${statusColors[station.color]}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-white">{station.name}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${statusBgColors[station.color]} ${statusTextColors[station.color]}`}
                  >
                    {getHeightStatusText(
                      station.height,
                      station.alertLevel,
                      station.evacuationLevel
                    )}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Altura:</span>
                    <span className="text-white font-bold text-lg">
                      {formatHeight(station.height)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Variación:</span>
                    <span className={`font-semibold ${
                      station.variation > 0
                        ? 'text-red-400'
                        : station.variation < 0
                          ? 'text-blue-400'
                          : 'text-slate-400'
                    }`}>
                      {station.variation > 0 ? '↑' : station.variation < 0 ? '↓' : '→'}{' '}
                      {Math.abs(station.variation).toFixed(2)} m
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Estado:</span>
                    <span className="text-white font-semibold">{station.state}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                    <span className="text-xs text-slate-400">Alerta:</span>
                    <span className="text-xs text-slate-300">{formatHeight(station.alertLevel)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Evacuación:</span>
                    <span className="text-xs text-slate-300">{formatHeight(station.evacuationLevel)}</span>
                  </div>
                </div>

                {data.lastUpdate && (
                  <p className="text-xs text-slate-500 mt-3">
                    {formatDate(data.lastUpdate)}
                  </p>
                )}
              </div>
            );
          })}
      </div>

      {error && data && (
        <p className="text-xs text-yellow-400 mt-4 text-center">
          Mostrando datos en caché. Hubo un error al actualizar.
        </p>
      )}
    </div>
  );
};
