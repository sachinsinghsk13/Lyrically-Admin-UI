import axios from 'axios';
import store from '../appstate/store';
import { LoginCredentials, LoginResponse, User } from '../models/authentication-model';
import Constants from '../utils/Constants';

class AuthenticationService {

    public isAuthenticated: boolean = false;
    public accessToken: string | null = null;
    public userInfo: User | null = null;
    constructor() {
        this.tryAuthenticationFromLocalStorage();
    }

    /**
     * Authenticates a user with username and password
     * @param credentials Username and password to login
     * @returns true if user is successfully authenticated otherwise returns false
     */
    async login(credentials: LoginCredentials): Promise<boolean> {
        try {
            let resp = await axios.post(`${Constants.BASE_URL}/admin-auth/login`, credentials);
            // dispatch action to redux store
            store.dispatch({
                type: 'authentication/loggedIn',
                payload: resp.data
            });

            // save auth to local storage
            window.localStorage.setItem(Constants.LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(resp.data));
            this.isAuthenticated = true;
            this.accessToken = resp.data.token;
            this.userInfo = resp.data.user;
        } catch (error) {
            console.error({ er: error });
            this.isAuthenticated = false;
        }
        return this.isAuthenticated;
    }

    /**
     * Logs out the currently logged in user. clears the localstorage credentials and redirect to login page
     */
    logout() {
        window.localStorage.removeItem(Constants.LOCAL_STORAGE_AUTH_DATA_KEY);
        this.isAuthenticated = false;
        this.accessToken = null;
        this.userInfo = null;
    }

    private tryAuthenticationFromLocalStorage() {
        let localAuthentication: string | null = window.localStorage.getItem(Constants.LOCAL_STORAGE_AUTH_DATA_KEY);
        if (localAuthentication) {
            let authData: LoginResponse = JSON.parse(localAuthentication);
            store.dispatch({
                type: 'authentication/loggedIn',
                payload: authData
            });
            this.accessToken = authData.token;
            this.isAuthenticated = true;
            this.userInfo = authData.user;
        }
    }
}
const authService = new AuthenticationService();
export default authService;