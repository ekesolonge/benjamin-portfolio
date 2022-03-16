import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Container from "./Container";
import BgAnimation from "./BgAnimation";

const Hero = () => {
  return (
    <Container py={{ base: 30, md: "8rem" }}>
      <Box position="relative" mb={8}>
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
      <Flex gap={8}>
        <Link
          href="#about"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Button size="lg">Learn More</Button>
        </Link>
        <Link
          href="/docs/resume.txt"
          download
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Button size="lg" variant="outline">
            Resume
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Hero;
