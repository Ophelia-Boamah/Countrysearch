import * as React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
