import { LoginAuthenticationService, SignUpAuthenticationService } from '../application/ports';

export function useLoginAuth(): LoginAuthenticationService {
    return {
        async loginAuth(email: string, password: string) {
            const response = await Parse.User.logIn(email, password, { 'usePost': true })

            console.log(response)
            if (response) {
                const user = {
                    email: response.attributes.email,
                    id: response.id,
                    // fullName: response.attributes.fullName,
                    userName: response.attributes.username,
                    emailVerified: response.attributes.emailVerified,
                    createdAt: response.createdAt
                }
                return user;
            } else {
                return null
            }

        }
    }
}
