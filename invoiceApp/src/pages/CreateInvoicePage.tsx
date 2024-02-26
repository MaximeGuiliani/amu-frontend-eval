import { Button, Input, Select, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const CreateInvoicePage = () => {
  const [name, setName] = useState("null");
  return (
    <>
      <Link to="/">Retour à la page d'acceuil</Link>
      <Heading>Créer une facture</Heading>
      <Stack>
        <Select>
          <option>Payé</option>
          <option>Envoyé</option>
        </Select>
        <Input placeholder="Montant de la facture"></Input>
        <Button>
          <Link to="/">Créer</Link>
        </Button>
      </Stack>
    </>
  );
};

export default CreateInvoicePage;
