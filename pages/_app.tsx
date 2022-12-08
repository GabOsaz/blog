import "../styles/globals.css";
import { AuthProvider } from "src/services/store";
import initializeServer from "src/services/apiAdapter";

initializeServer();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
