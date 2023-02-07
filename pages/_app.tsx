import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "src/services/store";
import initializeServer from "src/services/apiAdapter";
import { Toaster } from "react-hot-toast";

initializeServer();

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className={roboto.className}>
        <Toaster />
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
