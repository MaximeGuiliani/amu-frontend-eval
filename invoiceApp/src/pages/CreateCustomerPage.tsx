import { useState } from "react";
import { Link } from "react-router-dom";

const CreateCustomerPage = () => {
  const [name, setName] = useState("null");

  return (
    <>
      <Link to={"/"}>Home</Link>

      <h2>Créer un client</h2>
      <input placeholder="Nom complet"></input>
      <input placeholder="email"></input>
      <button>Enregister</button>
    </>
  );
};

export default CreateCustomerPage;
