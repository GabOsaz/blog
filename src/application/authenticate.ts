import { useLoginAuth, useSignUpAuth, useLogOutAuth } from "src/services/authAdaper";
import { userStorageAdapter } from "src/services/storageAdapter";
import { LoginAuthenticationService, UserStorageService, SignUpAuthenticationService } from "./ports";

export function useSignupAuthenticate() {
    const signupAuth: SignUpAuthenticationService = useSignUpAuth()
    const storage: UserStorageService = userStorageAdapter()

    async function signupAuthenticate(email: Email, userName: string, password: string): Promise<void> {
        const user = await signupAuth.signupAuth(email, userName, password);

        storage.updateUser(user)
    }

    return {
        user: storage.user,
        signupAuthenticate
    }
}

export function useLogOutAuthenticate() {
    const storage: UserStorageService = userStorageAdapter()

    async function logOutAuthenticate() {
        useLogOutAuth()
        storage.clearUser()
    }

    return {
        logOutAuthenticate,
        user: storage.user
    }
}


export function useLoginAuthenticate() {
    const loginAuth: LoginAuthenticationService = useLoginAuth()
    const storage: UserStorageService = userStorageAdapter();

    async function loginAuthenticate(email: Email, password: string): Promise<void> {
        const user = await loginAuth.loginAuth(email, password);
        console.log('login authenticate')
        console.log(user)
        storage.updateUser(user)
    }

    return {
        user: storage.user,
        loginAuthenticate,
    }
}

