import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;

