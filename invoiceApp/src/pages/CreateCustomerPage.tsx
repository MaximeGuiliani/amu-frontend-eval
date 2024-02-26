import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const CreateCustomerPage = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <>
      <Link to={"/"}>Home</Link>

      <h2>Créer un client</h2>

      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <VStack spacing={5}>
              <Input
                type="email"
                value={email}
                onChange={updateEmail}
                placeholder="email"
              />

              <Input
                placeholder="Nom complet"
                value={name}
                onChange={updateName}
              />
            </VStack>
          </FormControl>
          <HStack spacing={1}>
            <Link to={"/"}>
              <Button mt={4} colorScheme="red" variant="outline">
                Annuler
              </Button>
            </Link>

            <Button mt={4} colorScheme="blue" variant="outline" type="submit">
              Enregister
            </Button>
          </HStack>
        </VStack>
      </form>
    </>
  );
};

export default CreateCustomerPage;
