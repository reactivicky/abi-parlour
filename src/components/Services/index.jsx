import {
  Card,
  CardContainer,
  CardTitle,
  Container,
  SectionHeading,
  TextContainer,
} from "./style";
import { GiGlobeRing, GiLipstick, GiPhotoCamera } from "react-icons/gi";
import { FaBrush } from "react-icons/fa";
import { ImScissors } from "react-icons/im";

const Services = () => {
  return (
    <Container>
      <TextContainer>
        <SectionHeading>Services For Every Occasion</SectionHeading>
        <p>Let&apos;s wake up your makeup look!</p>
      </TextContainer>

      <CardContainer>
        <Card>
          <GiGlobeRing />
          <CardTitle>Bridal</CardTitle>
          <p>
            Makeup services for brides. Services include under eye treatment,
            airbrush or traditional makeup and eyelashes.
          </p>
        </Card>
        <Card>
          <FaBrush />
          <CardTitle>Air-Brush</CardTitle>
          <p>
            All day wear, even coverage done with an airbrush tool. Matte
            finish.
          </p>
        </Card>
        <Card>
          <ImScissors />
          <CardTitle>Makeup Class</CardTitle>
          <p>1hr session face-to-face or via ZOOM.</p>
        </Card>
        <Card>
          <GiLipstick />
          <CardTitle>Special Events</CardTitle>
          <p>
            Makeup for any occasion. Applied with brushes and sponges. Lashes
            not included.
          </p>
        </Card>
        <Card>
          <GiPhotoCamera />
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
