import styled from "@emotion/styled";

export const Container = styled.div`
  height: 60vh;
  background-color: #f9f9f9;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    height: auto;
    padding: 0 2rem 2rem;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin: 3rem 0 5rem;
  @media (max-width: 1200px) {
    margin: 3rem 0 2rem;
  }
`;

export const SectionHeading = styled.h2``;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(176, 176, 176, 0.2);
  border-radius: 0.5rem;
`;
export const CardTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
