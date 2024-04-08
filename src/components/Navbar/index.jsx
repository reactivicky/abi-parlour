import { List, Nav, LogoContainer } from "./style";
import { FaPhone } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer><img src={Logo} /></LogoContainer>
      <List>
        <li>Home</li>
        <li>About</li>
        <li>Book Online</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>
          <FaPhone /> +91 9952515897
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
