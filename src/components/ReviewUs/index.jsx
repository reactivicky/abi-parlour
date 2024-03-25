import {
  Container,
  Btn,
  BtnContainer,
  Review,
  ReviewImage,
  SectionHeading,
} from "./style";

const ReviewUs = () => {
  return (
    <Container>
      <SectionHeading>Review Us</SectionHeading>
      <BtnContainer>
        <Btn></Btn>
        <Btn></Btn>
        <Btn></Btn>
      </BtnContainer>

      <ReviewImage />
      <Review>
        I absolutely loved my makeup on my wedding day! She&apos;s absolutely
        the best! Highly recommended!
      </Review>
      <p className="roboto-bold">
        <i>Debbit T Brewton</i>
      </p>
    </Container>
  );
};

export default ReviewUs;
