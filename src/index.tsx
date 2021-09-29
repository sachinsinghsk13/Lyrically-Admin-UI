import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './appstate/store';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { authorizationTokenInterceptor } from './utils/http-interceptor';
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
  axios.interceptors.request.use(authorizationTokenInterceptor);
} 