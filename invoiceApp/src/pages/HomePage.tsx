import {
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllCustomers from "../api/http";
import { Client } from "../types/Client";

const HomePage = () => {
  const [state, setState] = useState<Client[]>([]);

  useEffect(() => {
    // Appel HTTP vers Supabase
    getAllCustomers().then((items) => {
      // On remplace la valeur actuel de state
      // par le tableau d'items venant de l'API
      console.log(items);
      setState(items);
    });
  }, []);

  return (
    <>
      <h2>Liste des clients</h2>
      <Link to={"/create"}>Créer un client</Link>

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
              <Tr>
                <Link to={`/${item.id}`}>
                  <Td>{item.name}</Td>
                </Link>
                <Td>{item.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Stack></Stack>
    </>
  );
};

export default HomePage;
