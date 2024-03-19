import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("null");

  return (
    <>
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default Header;
