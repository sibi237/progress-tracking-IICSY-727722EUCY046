import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hh from './hook/Usestate';
import ExampleComponent from './hook/Useeffect';
import Component1 from './hook/Usecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Hh />
  <ExampleComponent />
  <Component1 />
  </React.StrictMode>
);

reportWebVitals();
