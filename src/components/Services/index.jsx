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

const ICON_SIZE = 60;

const Services = () => {
  return (
    <Container id="services">
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
      <TextContainer>
        <SectionHeading className="dancing-script-bold">
          Services For Every Occasion
        </SectionHeading>
        <p>Let&apos;s wake up your makeup look!</p>
      </TextContainer>

      <CardContainer>
        <Card>
          <GiGlobeRing size={ICON_SIZE} />
          <CardTitle className="dancing-script-bold">Bridal</CardTitle>
          <p>
            Makeup services for brides. Services include under eye treatment,
            airbrush or traditional makeup and eyelashes.
          </p>
        </Card>
        <Card>
          <FaBrush size={ICON_SIZE} />
          <CardTitle className="dancing-script-bold">Air-Brush</CardTitle>
          <p>
            All day wear, even coverage done with an airbrush tool. Matte
            finish.
          </p>
        </Card>
        <Card>
          <ImScissors size={ICON_SIZE} />
          <CardTitle className="dancing-script-bold">Makeup Class</CardTitle>
          <p>1hr session face-to-face or via ZOOM.</p>
        </Card>
        <Card>
          <GiLipstick size={ICON_SIZE} />
          <CardTitle className="dancing-script-bold">Special Events</CardTitle>
          <p>
            Makeup for any occasion. Applied with brushes and sponges. Lashes
            not included.
          </p>
        </Card>
        <Card>
          <GiPhotoCamera size={ICON_SIZE} />
          <CardTitle className="dancing-script-bold">Production</CardTitle>
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
