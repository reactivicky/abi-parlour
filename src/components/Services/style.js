import styled from "@emotion/styled";

export const Container = styled.div`
  height: 60vh;
  background-color: #f9f9f9;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .curve {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .curve svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 40px;
  }

  .curve .shape-fill {
    fill: #ffffff;
  }

  @media (max-width: 1200px) {
    height: auto;
    padding: 0 2rem 2rem;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin: 4rem 0 5rem;
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
