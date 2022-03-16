import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import Container from "./Container";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/benjamin-ogunbola-6a0650187/",
      icon: <AiFillLinkedin fontSize="24px" />,
    },
    {
      href: "https://www.twitter.com/oba_inspires/",
      icon: <AiOutlineTwitter fontSize="24px" />,
    },
    {
      href: "https://www.facebook.com/benjamin.ogunbola",
      icon: <AiFillFacebook fontSize="24px" />,
    },
    {
      href: "https://www.instagram.com/oba_inspires/",
      icon: <AiFillInstagram fontSize="24px" />,
    },
  ];
  return (
    <Container py={4}>
      <Flex
        wrap="wrap"
        align="center"
        justify={{ base: "center", md: "space-between" }}
      >
        <Flex wrap="wrap" mb={{ base: 4, md: 0 }} gap={{ base: 4, md: 10 }}>
          <Box mb={4}>
            <Heading size="md">Call</Heading>
            <Link
              _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
              href="tel:+2348170399541"
            >
              <Text>+2348170399541</Text>
            </Link>
          </Box>
          <Box>
            <Heading size="md">Email</Heading>
            <Link
              _hover={{ color: useColorModeValue("blue.500", "blue.300") }}
              href="mailto:ogunbolabenjamin@gmail.com"
            >
              <Text>ogunbolabenjamin@gmail.com</Text>
            </Link>
          </Box>
        </Flex>

        <Flex align="center" gap={4}>
          {socials.map((social, index) => (
            <SocialIcon key={index} {...social} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
