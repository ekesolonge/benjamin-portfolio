import { Box, Grid, GridItem } from "@chakra-ui/react";
import Container from "./Container";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const Projects = ({ ...props }) => {
  const projects = [
    { name: "Word Wave" },
    { name: "Paradigm Shift" },
    { name: "Time Out With Ben" },
    { name: "Graduates Orientation Program" },
    { name: "Time Out With Ben" },
    { name: "Graduates Orientation Program" },
  ];
  return (
    <Box py={20} id="projects" {...props}>
      <Container>
        <Heading mb={10} size="2xl">
          Projects
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={10}
        >
          {projects.map((project, index) => (
            <GridItem key={index}>
              <ProjectCard project={project} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
