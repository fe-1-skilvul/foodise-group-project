import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import LoginCtxProvider from './context/LoginCtx';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginCtxProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LoginCtxProvider>
  </React.StrictMode>
);
