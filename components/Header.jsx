import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Flex,
  Heading,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Container from "./Container";
import NavItems from "./NavItems";
import { IoLogoElectron } from "react-icons/io5";

const Header = () => {
  const navItems = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      h={{ base: isOpen ? "100vh" : "auto", sm: "auto" }}
      maxH="100vh"
      w="100%"
      top={0}
      left={0}
      py={4}
      position={{ base: isOpen ? "fixed" : "sticky", sm: "sticky" }}
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={isOpen ? 0 : "1px"}
      borderColor={useColorModeValue("gray.800", "white")}
      zIndex={999}
    >
      <Container h="100%">
        <Flex
          flexDir={{ base: "column", sm: "row" }}
          align="center"
          justify="space-between"
          h="100%"
        >
          <Flex
            w={{ base: "full", sm: "auto" }}
            align="center"
            justify="space-between"
          >
            <Flex align="center">
              <IoLogoElectron fontSize="30px" />
              <Heading size="lg" ml={2} textAlign="center">
                Portfolio
              </Heading>
            </Flex>
            <IconButton
              d={{ base: "block", sm: "none" }}
              variant="outline"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={5} />}
              onClick={onToggle}
            />
          </Flex>
          <Flex
            d={{ base: isOpen ? "flex" : "none", sm: "flex" }}
            h={{ base: "calc(100vh - 40px - 16px)", sm: "auto" }}
            align="center"
            justify="center"
          >
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              align="center"
              gap={6}
            >
              {navItems.map((item, index) => (
                <NavItems onClick={onClose} key={index} {...item} />
              ))}
            </Flex>
          </Flex>
          <IconButton
            d={{ base: isOpen ? "flex" : "none", sm: "flex" }}
            variant="solid"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
