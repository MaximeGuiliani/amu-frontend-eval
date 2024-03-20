import {
  Button,
  Flex,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomerById, getCustomerInvoices } from "../api/http";
import { Customer } from "../types/Customer";
import { Invoice } from "../types/Invoice";

const CustomerDetailsPage = () => {
  const [state, setState] = useState<Customer | undefined>();
  const [invoices, setInvoices] = useState<Invoice[] | undefined>([]);
  const { idCustomer } = useParams<{ idCustomer: string }>();

  useEffect(() => {
    // Appel HTTP vers Supabase avec l'id présent dans l'URL
    getCustomerById(idCustomer ?? "").then((items: Customer) => {
      setState(items);
    });
  }, [idCustomer]);

  useEffect(() => {
    // Appel HTTP vers Supabase avec l'id présent dans l'URL
    getCustomerInvoices(idCustomer ?? "").then((items: Invoice[]) => {
      setInvoices(items);
      console.log(items);
    });
  }, [idCustomer]);

  function setConfirmed(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>{state?.name ?? "Name Undefined"}'s Details</Heading>
          <h3>{state?.email}</h3>
        </Stack>
        {invoices?.length === 0 ? (
          <Heading>No invoices</Heading>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Price</Th>
                <Th>Status</Th>
                <Th>Update Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices?.map((invoice) => (
                <Tr key={invoice.invoice_id}>
                  <Td>{invoice.invoice_price} €</Td>
                  <Td>{invoice.is_sent ? "Paid" : "Waiting for payment"}</Td>
                  <Td>
                    {" "}
                    {invoice.is_sent ? null : (
                      <Button
                        colorScheme="green"
                        variant="outline"
                        onClick={() =>
                          window.confirm("Mark this invoice as paid?") &&
                          setConfirmed(true)
                        }
                      >
                        Paid
                      </Button>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}

        <Stack>
          <Flex justify="flex-end">
            <Link to={"invoice/add"}>
              <Button mt={4} colorScheme="blue" variant="outline">
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
