import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'

const CustomerDetailsPage = () => {
  const [name, setName] = useState("null");

  return (
    <>


      <Link to="/">Retour aux tâches</Link>
      <h2>Fiche de {name}</h2>
      <h3>mail</h3>
      <Stack>

      </Stack>
      <Link to={"1/invoice/add"}>Créer une facture</Link>
    </>
  );
};

export default CustomerDetailsPage;
