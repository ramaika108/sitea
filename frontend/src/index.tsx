import React from 'react';
import ReactDOM from 'react-dom/client';
import './libs/bootstrap/css/bootstrap-grid.min.css';
import './libs/bootstrap/css/bootstrap-reboot.min.css';
import './libs/micromodal/micromodal.css';
import './css/main.css';
import './css/media.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
