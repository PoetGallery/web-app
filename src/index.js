import React from 'react';
import ReactDOM from 'react-dom';
import {MetamaskStateProvider} from 'use-metamask';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MetamaskStateProvider>
    <App />
  </MetamaskStateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
