import {
  Button,
  Flex,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCustomers } from "../api/http";
import { Customer } from "../types/Customer";

const HomePage = () => {
  const [state, setState] = useState<Customer[]>([]);

  useEffect(() => {
    getAllCustomers().then((items) => {
      console.log(items);
      setState(items);
    });
  }, []);

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Clients</Heading>
        </Stack>
        {state?.length === 0 ? (
          <Heading>Aucun Clients</Heading>
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nom du client</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody>
                {state.map((item) => (
                  <Tr key={item.user_id}>
                    <Td>
                      <Link to={`/${item.user_id}`} state={{ name: item.name }}>
                        {item.name}
                      </Link>
                    </Td>
                    <Td>{item.email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
        <Flex justify="flex-end">
          <Link to="/create">
            <Button mt={4} colorScheme="blue" variant="outline">
              Créer un client
            </Button>
          </Link>
        </Flex>
      </Stack>
    </>
  );
};

export default HomePage;
