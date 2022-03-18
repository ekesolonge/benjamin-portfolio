import { useEffect } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "../theme";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => AOS.init(), []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
