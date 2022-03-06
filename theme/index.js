import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

export const theme = extendTheme(
  {
    config,
    fonts,
  },
  withDefaultColorScheme({ colorScheme: "blue" })
);
