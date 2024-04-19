import { Container, SectionHeading } from "./style";
import Button from "../Common/Button";

const BookAppointment = () => {
  return (
    <Container className="clr_white">
      <SectionHeading>Book Your Appointment Now</SectionHeading>
      <Button variant="secondary">+91 9342098201</Button>
    </Container>
  );
};

export default BookAppointment;
