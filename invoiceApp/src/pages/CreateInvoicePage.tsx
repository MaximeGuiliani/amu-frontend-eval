import { Button, Input, Select, Stack } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { createInvoice, getCustomerById } from "../api/http";
import { InvoiceData } from "../types/InvoiceData";
import React from "react";
import { Customer } from "../types/Customer";

const CreateInvoicePage = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<Customer | undefined>();

  const { idcustomer } = useParams<{ idcustomer: string }>();

  const [amount, setAmount] = React.useState("");
  const [is_paid, setIsPaid] = React.useState("PAID");

  useEffect(() => {
    // Appel HTTP vers Supabase avec l'id présent dans l'URL
    getCustomerById(idcustomer ?? "").then((items: Customer) => {
      setCustomer(items);
    });
  }, [idcustomer]);

  const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const updateIsPaid = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPaid(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!amount) {
      alert("Veuillez remplir le champ montant.");
      return;
    }
    const invoiceData = new InvoiceData(
      idcustomer ?? "no name",
      amount.toString(),
      is_paid === "PAID" ? true : false
    );
    createInvoice(invoiceData);
    // redirect to home page
    navigate("/" + idcustomer);
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} align="center">
          <Heading>Créer une facture </Heading>
          <div> Pour le Client : {customer?.name ?? "Pas de nom"}</div>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Select name="status" onChange={updateIsPaid}>
              <option value={"PAID"}>Payé</option>
              <option value={"SENT"}>Envoyé</option>
            </Select>

            <div style={{ position: "relative" }}>
              <Input
                onChange={updateAmount}
                name="amount"
                type="number"
                placeholder="Prix de la facture"
                style={{ paddingRight: "30px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15px",
                  transform: "translateY(-50%)",
                }}
              >
                €
              </div>
            </div>

            <Button mt={4} colorScheme="blue" variant="outline" type="submit">
              Enregistrer la facture
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default CreateInvoicePage;
