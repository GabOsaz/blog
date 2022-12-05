import { LoginAuthenticationService, SignUpAuthenticationService } from '../application/ports';

export function useLoginAuth() {
    return {
        loginAuth(email: string, password: string): LoginAuthenticationService {
            const response = Parse.User.login(email, password, { 'usePost': true })
            const user = {
                email: response.attribute.email,
                id: response.attribute.id,
                fullName: response.attribute.fullName
            }

            return user;
        }
    }
}

