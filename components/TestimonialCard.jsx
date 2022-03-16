import { Box, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AppImage from "./AppImage";
import profileImg from "../public/images/profile.jpg";

const TestimonialCard = ({ testimonial }) => {
  return (
    <Box position="relative" flex="0 0 100%" p={5}>
      <Flex flexDir="column" align="center">
        <AppImage
          src={profileImg}
          layout="fill"
          boxSize="80px"
          borderRadius="full"
          mb={4}
        />
        <Flex flexDir="column" align="center">
          <Icon alignSelf="flex-start" as={FaQuoteLeft} />
          <Text my={4} textAlign="center" maxW="min(100%, 700px)">
            {testimonial.content}
          </Text>
          <Icon alignSelf="flex-end" as={FaQuoteRight} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
