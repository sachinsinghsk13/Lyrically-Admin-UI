import axios from "axios";
import { LoginCredentials } from "../models/authentication-model";

class AuthenticationAPI {
    static async login(credentials: LoginCredentials) {
        axios.interceptors.request.use(req => {
            console.log(req);
            return req;
        })
    }
}
 
export default AuthenticationAPI;