import styled from "@emotion/styled";

export const Container = styled.div`
  background: #d96a73;
  padding: 3rem 10rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1074px) {
    padding: 3rem 2rem 3rem;
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
