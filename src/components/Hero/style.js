import styled from "@emotion/styled";
import brideImage from "../../assets/bride.webp";

export const Container = styled.div`
  height: 80vh;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(18, 28, 40, 0.8),
      rgba(255, 255, 255, 0)
    ),
    url(${brideImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media (min-width: 1074px) {
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
      height: 91px;
    }

    .curve .shape-fill {
      fill: #ffffff;
    }
  }

  @media (max-width: 1074px) {
    padding: 0 2rem 3rem;
    height: auto;

    .curve {
      display: none;
    }
  }
`;

export const TextBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const H3 = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const H1 = styled.h1`
  font-size: 3rem;

  @media (max-width: 500px) {
    line-height: 1.3;
  }
`;

export const P = styled.p`
  max-width: 45rem;
  margin-bottom: 2.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
