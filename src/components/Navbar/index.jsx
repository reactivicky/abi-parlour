import { List, Nav, LogoContainer } from "./style";
import { FaPhone } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <List>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services"> Services</a>
        </li>
        <li>
          <a href="#solutions">Solutions</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
        <li>
          <FaPhone /> +91 9952515897
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
