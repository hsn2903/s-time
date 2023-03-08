import { AppProvider } from "@/contexts/appContext";
import { UserProvider } from "@/contexts/userContext";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <UserProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </UserProvider>
    </main>
  );
}
