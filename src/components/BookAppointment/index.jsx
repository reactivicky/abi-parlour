import { Container, SectionHeading } from "./style";
import Button from "../Common/Button";

const BookAppointment = () => {
  return (
    <Container className="clr_white">
      <SectionHeading>Book Your Appointment Now</SectionHeading>
      <Button variant="secondary">Book An Appointment</Button>
    </Container>
  );
};

export default BookAppointment;
