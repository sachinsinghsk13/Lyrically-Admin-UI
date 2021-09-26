import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './appstate/store';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { authorizationTokenInterceptor } from './utils/http-interceptor';
import { CssBaseline } from '@mui/material';
import theme from './styles/themes/app-theme';
import { ThemeProvider } from '@mui/material/styles';
setupHttpInterceptors();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
        <App/>
      {/* </ThemeProvider> */}
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

function setupHttpInterceptors() {
  let s = axios.interceptors.request.use(authorizationTokenInterceptor);
} 