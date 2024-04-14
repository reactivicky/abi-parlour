import {
  Container,
  ImageContainer,
  TextContainer,
  SectionName,
  Heading,
} from "./style";
// import Button from "../Common/Button";

const AboutMe = () => {
  return (
    <Container id="about">
      <ImageContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ImageContainer>
      <TextContainer>
        <SectionName className="roboto-light">About Me</SectionName>
        <Heading className="dancing-script-bold">
          My name is Balaabirami
        </Heading>
        <p>
          Since I can remember, I was always infatuated with makeup and beauty.
          In school, I was always that girl who would do her friend&apos;s hair
          or makeup. I am the girl who buys all the anti-aging products for her
          skincare regimen. I love to show off my skills as well as teaching the
          craft.
        </p>

        <p className="mb-2">
          Three years ago, I decided to turn this passion into a living. I
          started with 3 clients and surely, SKINGLAM is thriving. My dream is
          to turn this company into an empire. Maybe, even start my own makeup
          line one day. Who knows!
        </p>

        {/* <Button>Contact Me</Button> */}
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
