import { Container, UpButton } from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <Container className="clr_white">
      <UpButton variant="secondary" onClick={handleClick}>
        <FaArrowCircleUp size={35} />
      </UpButton>
    </Container>
  );
};

export default Footer;
