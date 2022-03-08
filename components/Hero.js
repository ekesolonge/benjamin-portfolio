import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Container from "./Container";
import BgAnimation from "./BgAnimation";

const Hero = () => {
  return (
    <Container mb={20} py={10}>
      <Box position="relative" mb={6}>
        <Box maxW="2xl">
          <Heading mb={4} size="3xl">
            Ogunbola Benjamin
            <br /> Ayodele
          </Heading>
          <Text fontSize="2xl">
            I am a consistent self-starter and result-oriented strategist,
            administrative personnel, and mental transformation speaker.
            <br />I am passionate about seeking better ways to improve personal
            development, mental transformation, and healthy self-esteem by
            harnessing divine direction, principles application, and emotional
            intelligence.
          </Text>
        </Box>
        <BgAnimation
          position="absolute"
          h="100%"
          w={{ base: "100%", md: "50%" }}
          top={{ base: "unset", md: 0 }}
          right={{ base: "unset", md: 0 }}
          bottom={{ base: 0, md: "unset" }}
          left={{ base: 0, md: "unset" }}
        />
      </Box>
      <Link
        href="#about"
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        <Button size="lg">Learn More</Button>
      </Link>
    </Container>
  );
};

export default Hero;
