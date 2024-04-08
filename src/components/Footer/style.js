import styled from "@emotion/styled";

export const Container = styled.div`
  height: 10vh;
  background: #121c28;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10rem;

  @media (max-width: 1074px) {
    justify-content: center;
  }
`;

export const UpButton = styled.button`
  background-color: white;
  padding: 0;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;

  :hover {
    scale: 1.1;
  }
`;
