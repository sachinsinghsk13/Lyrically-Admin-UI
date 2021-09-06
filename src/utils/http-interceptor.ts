import { AxiosRequestConfig, AxiosResponse } from "axios";
import authService from "../services/auth-service";

const interceptorMap = new Map<string,string>();
export default interceptorMap;

export function authorizationTokenInterceptor(req: AxiosRequestConfig) {
    if (authService.isAuthenticated) {
        req.headers['Authorization'] = `Bearer ${authService.accessToken}`;
    }
    return req;
}

export function unauthorizedRequestInterceptor(res: AxiosResponse) {
    return res;
}