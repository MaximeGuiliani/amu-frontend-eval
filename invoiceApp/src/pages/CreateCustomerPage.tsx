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
    const customerData = new CustomerData(name, email);
    createCustomer(customerData);
    // redirect to home page
    navigate("/");
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Create Customer</Heading>
        </Stack>

        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl id="form">
              <FormLabel>Customer Details</FormLabel>
              <VStack spacing={5}>
                <Input
                  type="email"
                  value={email}
                  onChange={updateEmail}
                  placeholder="Email"
                />

                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={updateName}
                />
              </VStack>
            </FormControl>
            <HStack spacing={1}>
              <Link to={"/"}>
                <Button mt={4} colorScheme="red" variant="outline">
                  Cancel
                </Button>
              </Link>

              <Button mt={4} colorScheme="blue" variant="outline" type="submit">
                Save
              </Button>
            </HStack>
          </VStack>
        </form>
      </Stack>
    </>
  );
};

export default CreateCustomerPage;
