import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

export type AppProps = {
  component?: Component;
  path?: string;
  checkingSession: boolean;
};

const initialProps: AppProps = {
  checkingSession: true,
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App props={initialProps} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
