import { Navegacion } from "./componentes/secciones/Navegacion";
import { PresentacionPrincipal } from "./componentes/secciones/PresentacionPrincipal";
import { Categorias } from "./componentes/secciones/Categorias";
import { Taller } from "./componentes/secciones/Taller";
import { Nosotros } from "./componentes/secciones/Nosotros";
import { Ubicacion } from "./componentes/secciones/Ubicacion";
import { PiePagina } from "./componentes/secciones/PiePagina";

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
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
