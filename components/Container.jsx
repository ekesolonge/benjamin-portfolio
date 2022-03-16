import { Container as ChakraContainer } from "@chakra-ui/react";
import React from "react";

const Container = ({ children, ...props }) => {
  return (
    <ChakraContainer maxW="container.lg" {...props}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
