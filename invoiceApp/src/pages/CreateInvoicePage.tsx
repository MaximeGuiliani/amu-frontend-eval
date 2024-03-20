import { Button, Input, Select, Stack } from "@chakra-ui/react";
import {  useParams, useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { FormEvent } from "react";
import { createInvoice } from "../api/http";
import { InvoiceData } from "../types/InvoiceData";
import React from "react";

const CreateInvoicePage = () => {
  const navigate = useNavigate();

  const { idcustomer } = useParams<{ idcustomer: string }>();

  const [amount, setAmount] = React.useState("");
  const [is_paid, setIsPaid] = React.useState("PAID");

  const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const updateIsPaid = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsPaid(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
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
          <Heading>Create invoice </Heading>
          <div> For Customer : maxime</div>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Select name="status" onChange={updateIsPaid}>
              <option>PAID</option>
              <option>SENT</option>
            </Select>

            <div style={{ position: "relative" }}>
              <Input
                onChange={updateAmount}
                name="amount"
                type="number"
                placeholder="Invoice price"
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

            <Button type="submit">Enregistrer la facture</Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default CreateInvoicePage;
