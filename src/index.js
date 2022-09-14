import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { NationalParkLog } from './NationalParkLog';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter  >
    <NationalParkLog/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();