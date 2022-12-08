import { LoginAuthenticationService, SignUpAuthenticationService, NotificationService } from '../application/ports';
import { useNotification } from './notificationAdapter';

export function useLoginAuth(): LoginAuthenticationService {
    const notifier: NotificationService = useNotification()

    return {
        async loginAuth(email: string, password: string) {
            try {
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

                    notifier.successNotification('Login Successful!')
                    return user;
                }
            } catch (error) {
                console.log(error)
                notifier.errorNotification(error.message)
            }

        }
    }
}
