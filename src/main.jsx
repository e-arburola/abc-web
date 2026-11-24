import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { vistaDeRuta } from './rutas.js';
import './index.css';

const contenedor = document.getElementById('root');
const vistaInicial = vistaDeRuta(window.location.pathname);
const aplicacion = (
  <React.StrictMode>
    <App vistaInicial={vistaInicial} />
  </React.StrictMode>
);

// Si la vista ya viene generada en el HTML (prerender), se hidrata; si no, se monta normal.
if (contenedor.hasChildNodes()) {
  ReactDOM.hydrateRoot(contenedor, aplicacion);
} else {
  ReactDOM.createRoot(contenedor).render(aplicacion);
}
