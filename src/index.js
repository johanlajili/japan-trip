import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './Components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  rootElement,
);
