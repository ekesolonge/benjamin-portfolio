import { Box, Flex, Heading, Tag, useColorModeValue } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    "Computer proficiency (Office software, internet, and email)",
    "Facilitation skills",
    "Capacity Building ",
    "Project Planning (Jira Tool)",
    "Procurement ",
    "Logistics management ",
    "Basic knowledge of C# ",
    "Fluency in written and spoken English",
    "Strong operations, administration, and organizational skills",
    "Strong interpersonal skills and ability to work with a variety of people",
    "Team coordination ",
    "Adaptability",
    "Emotional intelligence",
    "Active Listening",
    "Tenacity and patience ",
    "Attention to details",
    "Analytical skill ",
    "Professional behavior ",
    "Active Learning",
  ];

  return (
    <Box>
      <Heading mb={2} size="lg">
        Core Skills
      </Heading>
      <Flex gap={2} wrap="wrap">
        {skills.map((skill, index) => (
          <Tag py="5px" variant="subtle" mb={1} key={index}>
            {skill}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
