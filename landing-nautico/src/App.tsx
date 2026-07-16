import { Navegacion } from "./componentes/secciones/Navegacion";
import { PresentacionPrincipal } from "./componentes/secciones/PresentacionPrincipal";
import { Categorias } from "./componentes/secciones/Categorias";
import { Taller } from "./componentes/secciones/Taller";
import { Nosotros } from "./componentes/secciones/Nosotros";
import { Ubicacion } from "./componentes/secciones/Ubicacion";
import { PiePagina } from "./componentes/secciones/PiePagina";
import { RiverHeightWidget } from "./components/widgets/RiverHeightWidget";
import { WindChartWidget } from "./components/widgets/WindChartWidget";
import { WeatherWidget } from "./components/widgets/WeatherWidget";

function App() {
  return (
    <div className="font-body text-tinta">
      <Navegacion />
      <main>
        <PresentacionPrincipal />
        <Categorias />
        <Taller />
        <Nosotros />
        <Ubicacion />
        
        {/* Nautical Widgets Section */}
        <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Información en Tiempo Real
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <RiverHeightWidget />
              </div>
              <div className="lg:col-span-1">
                <WindChartWidget />
              </div>
              <div className="lg:col-span-1">
                <WeatherWidget />
              </div>
            </div>
          </div>
        </section>
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
