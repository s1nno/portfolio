"use client";
import React from "react";
import { useState } from "react";
import {
  Container,
  FormControl,
  Heading,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const initvalues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initvalues };

export const ContactSection = () => {
  const [state, setState] = useState(initvalues);

  const { values } = state;

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact Me</Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" />
        <FormLabel>Email</FormLabel>
        <Input type="text" name="Email" />
        <FormLabel>Subject</FormLabel>
        <Input type="text" name="Subject" />
        <FormLabel>Body</FormLabel>
        <Input type="text" name="Body" />
      </FormControl>
    </Container>
  );
};

export default ContactSection;
