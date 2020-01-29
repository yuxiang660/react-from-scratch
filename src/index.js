import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './styles/main.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app')
);
