import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { wearhouseStore } from '../Store/store.js';
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={wearhouseStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
