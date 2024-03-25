import Button from "../Common/Button";
import Navbar from "../Navbar";
import { Container, H2, TextBlock, H1, H3, P, BtnContainer } from "./style";

const Hero = () => {
  return (
    <Container className="clr_white">
      <Navbar />
      <TextBlock>
        <H3>Singaperumal Koil, Chennai</H3>
        <H1>SK | Glam</H1>
        <H2>Makeup artist</H2>
        <P>
          Welcome to SK | Glam where everything is vibrant and chic. Book your
          makeup appointment today! I also offer some hairstyling
        </P>
        <BtnContainer>
          <Button>Book Now</Button>
          <Button variant="secondary">Contact Now</Button>
        </BtnContainer>
      </TextBlock>
    </Container>
  );
};

export default Hero;
