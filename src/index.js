import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// --------------------------
import MainStartingApp from './MainStartingApp'
// ---------------------------
// render header here......................................................................
ReactDOM.render(
  <BrowserRouter>
  <MainStartingApp />
  </BrowserRouter>,
  document.getElementById('root')
);
