import { useState } from "react";
import { Link } from "react-router-dom";

const CreateInvoicePage = () => {
  const [name, setName] = useState("null");
  return (
    <>
      <Link to="/">Retour à la page d'acceuil</Link>
      <h2>Créer une facture</h2>
      <select>
        <option>Client 1</option>
        <option>Client 2</option>
      </select>
      <input placeholder="Montant de la facture"></input>
    </>
  );
};

export default CreateInvoicePage;
