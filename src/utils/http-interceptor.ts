import { AxiosRequestConfig, AxiosResponse } from "axios";
import authService from "../services/auth-service";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const interceptorMap = new Map<string,string>();
export default interceptorMap;

export function authorizationTokenInterceptor(req: AxiosRequestConfig) {
    if (authService.isAuthenticated) {
        req.headers['Authorization'] = `Bearer ${authService.accessToken}`;
    }
    return req;
}

export function unauthorizedRequestInterceptor(res: AxiosResponse) {
    console.log(res);
    if (res.status === 401) {
        history.push('/login');
    }
    return res;
}