import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ActualDelivery} from './Context/UsuarioActual.js'

ReactDOM.render(
  <React.StrictMode>
    <ActualDelivery>
    <App />
  </ActualDelivery>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
