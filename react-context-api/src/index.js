import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataLayer } from './context/DataLayer';
import reducer, { initialState } from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer reducer={reducer} initialState={initialState}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
