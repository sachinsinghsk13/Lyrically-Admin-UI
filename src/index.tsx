import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './appstate/store';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { authorizationTokenInterceptor } from './utils/http-interceptor';
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
setupHttpInterceptors();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ConfirmProvider>
          <App />
        </ConfirmProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

function setupHttpInterceptors() {
  axios.interceptors.request.use(authorizationTokenInterceptor);
}