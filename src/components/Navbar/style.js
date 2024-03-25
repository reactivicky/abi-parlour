import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0 3rem;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;

  @media (max-width: 1074px) {
    display: none;
  }
`;
