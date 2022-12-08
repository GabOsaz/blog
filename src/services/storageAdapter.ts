import { UserStorageService } from '../application/ports'

import { useStore } from './store'

export function userStorageAdapter(): UserStorageService {
    return useStore()
}
