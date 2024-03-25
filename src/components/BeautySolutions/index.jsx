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
    <Container>
      <TextContainer className="clr_white">
        <SectionHeading>Book Your Appointment Now</SectionHeading>
        <p>
          All out services are down below. <b>Contact</b> us for any questions!
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
            <p>1hr 30min</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Flat Iron</CardSubHeading>
            <p>
              <i>Flat iron hair</i>
            </p>
            <p>1hr 30min</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Soft Curls</CardSubHeading>
            <p>1hr</p>
          </div>
        </Card>

        <Card>
          <CardHeading>Make Up</CardHeading>
          <Underline />

          <div className="mb-2">
            <CardSubHeading className="roboto-bold">Bridal</CardSubHeading>
            <p>3hr</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Traditional Makeup
            </CardSubHeading>
            <p>2hr</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Events, Groups
            </CardSubHeading>
            <p>All Day</p>
          </div>
        </Card>

        <Card>
          <CardHeading>Others</CardHeading>
          <Underline />

          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Airbrush Makeup
            </CardSubHeading>
            <p>3hr</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Traditional Makeup
            </CardSubHeading>
            <p>
              <i>With Lashes</i>
            </p>
            <p>3hr</p>
          </div>
          <div className="mb-2">
            <CardSubHeading className="roboto-bold">
              Online Class
            </CardSubHeading>
            <p>
              <i>Beginners Course with Makeup Application</i>
            </p>
            <p>1hr</p>
          </div>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default BeautySolutions;
