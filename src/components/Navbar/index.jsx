import { List, Nav } from "./style";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <Nav>
      <div>Logo</div>
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
