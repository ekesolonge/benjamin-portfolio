import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Container from "./Container";
import profile from "../public/images/profile.jpg";
import Heading from "./Heading";
import Skills from "./Skills";

const About = () => {
  return (
    <Container id="about" mb={20} py={10}>
      <Box mb={8}>
        <Heading mb={10} size="2xl">
          About Me
        </Heading>
        <Flex
          gap={{ base: 10, md: 36 }}
          flexDir={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Box
            mb={{ base: 0, md: 20 }}
            position="relative"
            h={{ base: "430px", md: "auto" }}
            w={{ base: "100%", md: "50%" }}
          >
            <Image
              src={profile}
              objectFit="cover"
              layout="fill"
              alt="profile"
            />
          </Box>
          <Text mt={{ base: 0, md: 20 }} w={{ base: "100%", md: "50%" }}>
            I am a consistent self-starter and result-oriented strategist,
            administrative personnel, and mental transformation speaker.
            <br /> I am passionate about seeking better ways to improve personal
            development, mental transformation, and healthy self-esteem by
            harnessing divine direction, principles application, and emotional
            intelligence.
            <br /> I am an independent and self-motivated mathematics graduate
            with proven and tested administrative, procurement, and customer
            service skill, with an outstanding reputation for being dependable,
            and trustworthy.
            <br /> High-performing administrative personnel with three years of
            work experience delivering in administrative roles. My goal is to
            convert my enthusiasm, creativity, and experience into a position
            where I will grow in the operations field, utilize my academic
            knowledge and skills to add value to wherever I find myself.
          </Text>
        </Flex>
      </Box>
      <Skills />
    </Container>
  );
};

export default About;
