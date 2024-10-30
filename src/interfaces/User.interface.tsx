export interface UserLoginResponse {
    token: string;
    user: User;
}

export interface User {
    id: number,
    name: string,
    familyName: string,
    email: string,
    roles: string[]
}

export interface AuthContext {
    token: string,
    user: User,
    login: (token: string, user: User) => void;
    logout: () => void;
}

export interface EditUserBody {
    "name": string,
    "familyName": string,
    "email": string,
    "roles": string[]
}

export interface AllUsers {
    total: number,
    users: User[]
}

export interface UserData {
    "name": string,
    "familyName": string,
    "email": string,
    "password": string,
}
