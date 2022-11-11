import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter  } from 'react-router-dom';
import './index.css';
import 'tw-elements';
import { HabitoApp } from './HabitoApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitoApp />
    </BrowserRouter>
  </React.StrictMode>
);


