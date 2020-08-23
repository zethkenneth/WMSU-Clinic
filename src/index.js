import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeContextProvider} from "./Components/Context/themeContext";
ReactDOM.render(
<BrowserRouter>
   
    <ThemeContextProvider>
    <App /> 
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
