import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
        setAlert("success");
        setMessage(
          "Thank you for contacting me, I will reply you as soon as possible."
        );
        // setAlert("error");
        // setMessage("There was an error submitting form please try again!");
      }, 1000);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {alert && (
        <Alert status={alert}>
          <AlertIcon />
          {message}
          <CloseButton
            onClick={() => setAlert("")}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <FormControl my={4} isInvalid={formik.touched.name && formik.errors.name}>
        <FormLabel htmlFor="email">Name</FormLabel>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        my={4}
        isInvalid={formik.touched.email && formik.errors.email}
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        my={4}
        isInvalid={formik.touched.message && formik.errors.message}
      >
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          minH="150px"
          placeholder="Enter your message here"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button my={8} type="submit" isLoading={formik.isSubmitting}>
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
