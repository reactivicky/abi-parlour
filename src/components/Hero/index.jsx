import Button from "../Common/Button";
import Navbar from "../Navbar";
import { Container, H2, TextBlock, H1, H3, P, BtnContainer } from "./style";

const Hero = () => {
  return (
    <Container className="clr_white">
      <Navbar />
      <TextBlock>
        <H3 className="dancing-script-regular">Singaperumal Koil, Chennai</H3>
        <H1 className="dancing-script-bold">AV Bridal Makeover</H1>
        <H2 className="roboto-light">Makeup artist</H2>
        <P>
          Welcome to AV Bridal Makeover where everything is vibrant and chic.
          Book your makeup appointment today! I also offer some hairstyling
        </P>
        <BtnContainer>
          <Button>Book Now</Button>
          <Button variant="secondary">Contact Now</Button>
        </BtnContainer>
      </TextBlock>
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default Hero;
