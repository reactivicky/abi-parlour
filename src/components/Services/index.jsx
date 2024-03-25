import {
  Card,
  CardContainer,
  CardTitle,
  Container,
  SectionHeading,
  TextContainer,
} from "./style";

const Services = () => {
  return (
    <Container>
      <TextContainer>
        <SectionHeading>Services For Every Occasion</SectionHeading>
        <p>Let&apos;s wake up your makeup look!</p>
      </TextContainer>

      <CardContainer>
        <Card>
          <CardTitle>Bridal</CardTitle>
          <p>
            Makeup services for brides. Services include under eye treatment,
            airbrush or traditional makeup and eyelashes.
          </p>
        </Card>
        <Card>
          <CardTitle>Air-Brush</CardTitle>
          <p>
            All day wear, even coverage done with an airbrush tool. Matte
            finish.
          </p>
        </Card>
        <Card>
          <CardTitle>Makeup Class</CardTitle>
          <p>1hr session face-to-face or via ZOOM.</p>
        </Card>
        <Card>
          <CardTitle>Special Events</CardTitle>
          <p>
            Makeup for any occasion. Applied with brushes and sponges. Lashes
            not included.
          </p>
        </Card>
        <Card>
          <CardTitle>Production</CardTitle>
          <p>
            Makeup services that run for long periods of time and typically need
            touch ups through the process.
          </p>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Services;
