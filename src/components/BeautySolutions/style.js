import styled from "@emotion/styled";

export const Container = styled.div`
  height: 80vh;
  background: #f9f9f9;
  padding: 3rem 10rem 0;

  .mb-2 {
    margin-bottom: 1rem;
  }
`;

export const TextContainer = styled.div`
  background-color: #4b5765;
  text-align: center;
  padding: 4rem;
  border-radius: 0.5rem;
  position: relative;
  top: -100px;
`;

export const SectionHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  position: relative;
  top: -40px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem 1.5rem;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(176, 176, 176, 0.2);
`;

export const CardHeading = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;

export const CardSubHeading = styled.p`
  text-transform: uppercase;
`;

export const Underline = styled.div`
  height: 2px;
  width: 60px;
  background-color: #d97c6b;
  margin-bottom: 1.5rem;
`;
