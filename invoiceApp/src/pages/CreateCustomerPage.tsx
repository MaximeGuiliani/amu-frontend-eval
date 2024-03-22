import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createCustomer } from "../api/http";
import { CustomerData } from "../types/CustomerData";

const CreateCustomerPage = () => {
  const navigate = useNavigate();

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
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    const missingFields = [];

    if (!trimmedName) {
      missingFields.push("Nom complet");
    }

    if (!trimmedEmail) {
      missingFields.push("Email");
    }

    if (missingFields.length > 0) {
      const fieldsMessage = missingFields.join(", ");
      alert(`Veuillez remplir les champs suivants : ${fieldsMessage}.`);
      return;
    }
    const customerData = new CustomerData(name, email);
    createCustomer(customerData);
    navigate("/");
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Créer un client</Heading>
        </Stack>

        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl id="form">
              <FormLabel>Détails du client</FormLabel>
              <VStack spacing={5}>
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={updateEmail}
                  placeholder="Email"
                />

                <Input
                  name="fullName"
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
                Enregistrer
              </Button>
            </HStack>
          </VStack>
        </form>
      </Stack>
    </>
  );
};

export default CreateCustomerPage;
