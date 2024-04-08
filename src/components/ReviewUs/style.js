import styled from "@emotion/styled";
import Bride3 from "../../assets/bride3.webp";

export const Container = styled.div`
  padding: 1.5rem 10rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1074px) {
    padding: 3rem 2rem 3rem;
    height: auto;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.8rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
`;

export const Btn = styled.button`
  height: 35px;
  width: 35px;
  border: 1px solid #d97c6b;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const ReviewImage = styled.div`
  height: 80px;
  width: 80px;
  border: 1px solid #d97c6b;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-image: url(${Bride3});
  background-size: cover;
  background-position: center;
`;

export const Review = styled.p`
  text-align: center;
  max-width: 35rem;
  margin-bottom: 1.5rem;
`;
