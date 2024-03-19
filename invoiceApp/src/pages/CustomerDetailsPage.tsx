import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

const CustomerDetailsPage = () => {
  const [name, setName] = useState("null");

  const location = useLocation();

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Link to="/">Retour aux tâches</Link>
          <Heading>Fiche de {location.state.name}</Heading>
          <h3>mail</h3>
          </Stack>
          <Stack>
            <Flex justify="flex-end">
              <Link to={"invoice/add"}>
                <Button variant="secondary" size="lg">
                  ADD +
                </Button>
              </Link>
            </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default CustomerDetailsPage;
