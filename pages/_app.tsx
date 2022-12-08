import "../styles/globals.css";
import { AuthProvider } from "src/services/store";
import initializeServer from "src/services/apiAdapter";
import { Toaster } from "react-hot-toast";

initializeServer();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
