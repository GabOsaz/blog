import { User } from "../domain/user"

export interface LoginAuthenticationService {
    loginAuth(email: Email, fullName: string): Promise<User>
}

export interface LogOutAuthenticationService {
    logOutAuth(): void;
}

export interface SignUpAuthenticationService {
    signupAuth(email: string, userName: string, password: string): Promise<User>
}

export interface UserStorageService {
    user?: User;
    updateUser(user: User): void;
    clearUser(): void;
}

export interface NotificationService {
    successNotification(message: string): void;
    errorNotification(message: string): void;
}
