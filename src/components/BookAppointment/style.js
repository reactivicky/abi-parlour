import styled from "@emotion/styled";

export const Container = styled.div`
  height: 20vh;
  background: #d96a73;
  padding: 3rem 10rem 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1074px) {
    padding: 3rem 2rem 0;
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

export const SectionHeading = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 680px) {
    display: none;
  }
`;
