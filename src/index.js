import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/index';
import './styles/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import { store } from './store'
import RouterApp from './components/RouterApp';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RouterApp />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
