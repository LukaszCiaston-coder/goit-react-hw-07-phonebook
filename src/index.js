import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import App from './components/App/App';

// Poprawiona ścieżka importu createRoot
import { createRoot } from 'react-dom/client';

// Używamy createRoot zamiast ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
