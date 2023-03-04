import { useRouter } from 'next/router';
import { LoginAuthenticationService, SignUpAuthenticationService, NotificationService } from '../application/ports';
import { useNotification } from './notificationAdapter';


export async function useLogOutAuth() {
    const notifier: NotificationService = useNotification();
    const router = useRouter()

    try {
        await Parse.User.logOut()
        const currentUser = await Parse.User.current();
        console.log(currentUser)

        if (currentUser === null) {
            notifier.successNotification('User has logged out successfully')
            console.log("log out successful")
            router.push('/login')
        } else {
            console.log("an error occurred while logging out this user please try again")
        }

    } catch (error) {
        notifier.errorNotification('A problem occurred performing this action')
    }

}

export function useSignUpAuth(): SignUpAuthenticationService {
    const notifier: NotificationService = useNotification();
    const router = useRouter()

    return {
        async signupAuth(email: string, userName: string, password: string) {
            try {
                const parseUserObject = new Parse.User()
                parseUserObject.set("username", userName);
                parseUserObject.set("email", email)
                parseUserObject.set("password", password)

                await parseUserObject.signUp()

                notifier.successNotification('Signup Successful!')

                console.log(parseUserObject)

                const userObject = {
                    id: parseUserObject?.id,
                    email: parseUserObject?.attributes?.email,
                    userName: parseUserObject?.attributes?.username,
                    emailVerified: false,
                    createdAt: parseUserObject?.createdAt,
                }

                router.push('/')

                return userObject;



            } catch (error) {
                console.log(error)
                notifier.errorNotification(error.message)
            }
        }
    }
}

export function useLoginAuth(): LoginAuthenticationService {
    const notifier: NotificationService = useNotification()
    const router = useRouter()

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
                    router.push('/')

                    return user;
                }
            } catch (error) {
                console.log(error)
                notifier.errorNotification(error.message)
            }

        }
    }
}
