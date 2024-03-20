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
import {
  getCustomerById,
  getCustomerInvoices,
  updateInvoiceStatus,
} from "../api/http";
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
  function getInvoices() {
    getCustomerInvoices(idCustomer ?? "").then((items: Invoice[]) => {
      setInvoices(items);
    });
  }
  useEffect(() => {
    getInvoices();
  }, [idCustomer]);

  function setConfirmed(invoiceId: string): void {
    updateInvoiceStatus(invoiceId).then(() => {
      getInvoices();
    });
  }

  return (
    <>
      <Stack spacing={4}>
        <Stack>
          <Flex justify="flex-start">
            <Link to={"/"}>
              <Button mt={4} colorScheme="gray" variant="outline">
                &lt; Retour aux clients
              </Button>
            </Link>
          </Flex>
        </Stack>
        <Stack spacing={4} align="center">
          <Heading>Information sur {state?.name ?? "Name Undefined"}</Heading>
          <h3>{state?.email}</h3>
        </Stack>
        {invoices?.length === 0 ? (
          <Heading>Pas de factures</Heading>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Prix</Th>
                <Th>Statut</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices?.map((invoice) => (
                <Tr key={invoice.invoice_id}>
                  <Td>{invoice.invoice_price} €</Td>
                  <Td>{invoice.is_paid ? "Paid" : "Waiting for payment"}</Td>
                  <Td>
                    {" "}
                    {invoice.is_paid ? null : (
                      <Button
                        colorScheme="green"
                        variant="outline"
                        onClick={() =>
                          window.confirm("Mark this invoice as paid?") &&
                          setConfirmed(invoice.invoice_id)
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
            <Link to={"invoices/add"}>
              <Button mt={4} colorScheme="blue" variant="outline">
                Créer une facture
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default CustomerDetailsPage;
