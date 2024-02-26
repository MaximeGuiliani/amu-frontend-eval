import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>Liste des clients</h2>
      <Link to={"/create"}>Créer un client</Link>
      {/* Faire un liste de clients*/}
    </>
  );
};

export default HomePage;
