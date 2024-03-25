import styled from "@emotion/styled";

export const Container = styled.div`
  height: 80vh;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
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

  div:nth-child(odd) {
    top: -20px;
  }
  div:nth-child(even) {
    bottom: -20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .mb-2 {
    margin-bottom: 2rem;
  }
`;

export const SectionName = styled.h3`
  text-transform: uppercase;
`;

export const Heading = styled.h2``;
