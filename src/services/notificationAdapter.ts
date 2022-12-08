import toast from "react-hot-toast";
import { NotificationService } from "../application/ports"

export function useNotification(): NotificationService {
    return {
        errorNotification: (message: string) => toast.error(message, { position: 'top-right' }),
        successNotification: (message: string) => toast.success(message, { position: 'top-right' })
    }
}
