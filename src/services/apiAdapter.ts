import { initializeParse } from "@parse/react-ssr";

export default function initializeServer() {
    return initializeParse(
        process.env.NEXT_PUBLIC_SERVER_URL,
        process.env.NEXT_PUBLIC_APP_ID,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
}
