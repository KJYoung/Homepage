import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import './styles/react-notification-custom.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GA_ID = process.env.REACT_APP_GA_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
}

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);