import styled from "@emotion/styled";

export const Container = styled.div`
  height: 80vh;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 1074px) {
    display: block;
    padding: 5rem 2rem 3rem;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 80%;
  align-items: center;
  div {
    border-radius: 0.5rem;
    height: 30rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
  }

  div:nth-of-type(odd) {
    top: -20px;
  }
  div:nth-of-type(even) {
    bottom: -20px;
  }

  @media (max-width: 1074px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .mb-2 {
    margin-bottom: 2rem;
    @media (max-width: 1074px) {
      margin-bottom: 1rem;
    }
  }
`;

export const SectionName = styled.h3`
  text-transform: uppercase;
`;

export const Heading = styled.h2``;
