import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import logoImage from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Link to={"/"}>
        <Logo  imageUrl={logoImage} />
      </Link>
    </>
  );
};

export default Header;
