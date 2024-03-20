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
    // Appel HTTP vers Supabase
    getAllCustomers().then((items) => {
      // On remplace la valeur actuelle de state
      // par le tableau d'items venant de l'API
      console.log(items);
      setState(items);
    });
  }, []);

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Customers</Heading>
        </Stack>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer Name</Th>
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
        <Flex justify="flex-end">
          <Link to="/create">
            <Button mt={4} colorScheme="blue" variant="outline">
              ADD +
            </Button>
          </Link>
        </Flex>
      </Stack>
    </>
  );
};

export default HomePage;
