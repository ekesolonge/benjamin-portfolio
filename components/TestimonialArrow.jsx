import { IconButton, useColorModeValue } from "@chakra-ui/react";

const TestimonialArrow = ({ icon, enabled, ...props }) => {
  return (
    <IconButton
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      size="lg"
      variant="unstyled"
      disabled={!enabled}
      color={useColorModeValue("blue.500", "blue.200")}
      _hover={{ color: useColorModeValue("blue.700", "blue.500") }}
      icon={icon}
      {...props}
    />
  );
};

export default TestimonialArrow;
