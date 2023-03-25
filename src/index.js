import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import RootContext from "./Context/RootContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <RootContext>
              <App />
          </RootContext>
      </BrowserRouter>
  </React.StrictMode>
);

