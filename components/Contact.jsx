import { Box } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Container from "./Container";
import Heading from "./Heading";

const Contact = ({ ...props }) => {
  return (
    <Box id="contact" py={10} {...props}>
      <Container>
        <Heading mb={10} size="2xl">
          Contact
        </Heading>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default Contact;
