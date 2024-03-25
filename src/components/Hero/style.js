import styled from "@emotion/styled";

export const Container = styled.div`
  height: 80vh;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
`;

export const TextBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H3 = styled.h3`
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
`;

export const P = styled.p`
  max-width: 45rem;
  margin-bottom: 2.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
