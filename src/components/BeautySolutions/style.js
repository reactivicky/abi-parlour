import styled from "@emotion/styled";

export const Container = styled.div`
  background: #121c28;
  padding: 3rem 10rem 3rem;
  position: relative;

  .curve {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
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

  @media (max-width: 1074px) {
    padding: 3rem 2rem 0;
    height: auto;

    .curve {
      display: none;
    }
  }

  .mb-2 {
    margin-bottom: 1rem;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  margin: 0 0 5rem;
`;

export const SectionHeading = styled.h3`
  font-size: 2.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  position: relative;
  top: -40px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
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
