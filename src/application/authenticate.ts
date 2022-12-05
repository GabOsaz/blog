import { useLoginAuth } from "src/services/authAdaper";
import { userStorageAdapter } from "src/services/storageAdapter";
import { LoginAuthenticationService, UserStorageService } from "./ports";

export function useLoginAuthenticate() {
    const loginAuth: LoginAuthenticationService = useLoginAuth()
    const storage: UserStorageService = userStorageAdapter();

    async function loginAuthenticate(email: Email, password: string): Promise<void> {
        const user = await loginAuth.loginAuth(email, password);
        storage.updateUser(user)
    }

    return {
        user: storage.user,
        loginAuthenticate,
    }

}