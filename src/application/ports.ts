import { User } from "../domain/user"

export interface LoginAuthenticationService {
    loginAuth(email: Email, fullName: string): Promise<User>
}

export interface SignUpAuthenticationService {
    signupAuth(email: string, fullName: string, userName: string, password: string): Promise<User>
}

export interface UserStorageService {
    user?: User;
    updateUser(user: User): void;
}
