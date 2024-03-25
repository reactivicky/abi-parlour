import { Container, UpButton } from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="clr_white">
      <UpButton variant="secondary">
        <FaArrowCircleUp />
      </UpButton>
    </Container>
  );
};

export default Footer;
