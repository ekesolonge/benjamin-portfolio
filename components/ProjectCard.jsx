import { Flex, Heading, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectCard = ({ project }) => {
  return (
    <Flex
      flexDir="column"
      justify="space-between"
      borderRadius="5px"
      bg={useColorModeValue("gray.700", "blue.200")}
      color={useColorModeValue("#ffffffeb", "#1a202c")}
      _hover={{
        bg: useColorModeValue("#2d3c4c", "#a0d9fd"),
        transform: "translateY(-5px)",
      }}
      transition="all ease-in-out 200ms"
      h="250px"
      p={5}
    >
      <Heading size="md">{project.name}</Heading>
      <IconButton
        alignSelf="flex-end"
        size="sm"
        icon={<ExternalLinkIcon boxSize="20px" />}
        variant="unstyled"
        _focus={{}}
        _hover={{
          color: useColorModeValue("blue.200", "blue.500"),
        }}
        transition="all ease-in-out 200ms"
      />
    </Flex>
  );
};

export default ProjectCard;
