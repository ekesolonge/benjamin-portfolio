import {
  Box,
  Heading as ChakraHeading,
  useColorModeValue,
} from "@chakra-ui/react";

const Heading = ({ size, children, ...props }) => {
  return (
    <Box textAlign="center" {...props}>
      <ChakraHeading size={size}>{children}</ChakraHeading>
      <Box
        my={2}
        mx="auto"
        h="5px"
        w="40px"
        borderRadius="full"
        bg={useColorModeValue("gray.800", "white")}
      ></Box>
    </Box>
  );
};

export default Heading;
