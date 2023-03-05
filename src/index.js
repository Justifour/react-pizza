import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './assets/css/index.css';
import App from './App/App';
import store from './App/store/store';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
