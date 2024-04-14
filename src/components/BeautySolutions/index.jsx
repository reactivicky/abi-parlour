import {
  Container,
  SectionHeading,
  TextContainer,
  Card,
  CardContainer,
  CardHeading,
  CardSubHeading,
  Underline,
} from "./style";

const BeautySolutions = () => {
  return (
    <Container id="solutions">
      <TextContainer className="clr_white">
        <SectionHeading className="dancing-script-bold">
          Beauty Solutions
        </SectionHeading>
        <p>
          All our services are down below. <b>Contact</b> us if you have any
          questions!
        </p>
      </TextContainer>

      <CardContainer>
        <Card>
          <CardHeading>Hair</CardHeading>
          <Underline />

          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Blow - Dry</CardSubHeading>
            <p>
              <i>Blow dry for any night out</i>
            </p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Flat Iron</CardSubHeading>
            <p>
              <i>Flat iron hair</i>
            </p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Soft Curls</CardSubHeading>
          </div>
        </Card>

        <Card>
          <CardHeading>Make Up</CardHeading>
          <Underline />

          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Bridal</CardSubHeading>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Traditional Makeup
            </CardSubHeading>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Events, Groups
            </CardSubHeading>
          </div>
        </Card>

        <Card>
          <CardHeading>Others</CardHeading>
          <Underline />

          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Airbrush Makeup
            </CardSubHeading>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Traditional Makeup
            </CardSubHeading>
            <p>
              <i>With Lashes</i>
            </p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Online Class
            </CardSubHeading>
            <p>
              <i>Beginners Course with Makeup Application</i>
            </p>
          </div>
        </Card>
      </CardContainer>
      <div className="curve">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default BeautySolutions;
