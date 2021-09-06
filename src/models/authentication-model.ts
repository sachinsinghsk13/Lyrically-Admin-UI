export interface LoginCredentials {
    username: string;
    password: string
}

export interface User {
    name: string;
    email: string;
    username: string;
}

export interface LoginResponse {
    token: string;
    user: User
}