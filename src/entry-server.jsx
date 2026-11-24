import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Se usa solo al compilar: genera el HTML de cada vista para que los buscadores lo lean.
export function render(vistaInicial) {
  return renderToString(<App vistaInicial={vistaInicial} />);
}
