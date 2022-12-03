import { User, UserName } from "../domain/user"

export interface AuthenticationService {
    auth(name: User | UserName,): Promise<User>
}
