import {
  Container,
  Btn,
  BtnContainer,
  Review,
  ReviewImage,
  SectionHeading,
} from "./style";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ReviewUs = () => {
  return (
    <Container id="review">
      <SectionHeading>Review Us</SectionHeading>
      <BtnContainer>
        <Btn>
          <FaFacebook />
        </Btn>
        <Btn>
          <FaInstagram />
        </Btn>
        <Btn>
          <FaYoutube />
        </Btn>
      </BtnContainer>

      <ReviewImage />
      <Review>
        I absolutely loved my makeup on my wedding day! She&apos;s absolutely
        the best! Highly recommended!
      </Review>
      <p className="roboto-bold">
        <i>Bala Saraswathi</i>
      </p>
    </Container>
  );
};

export default ReviewUs;
