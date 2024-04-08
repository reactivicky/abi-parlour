import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 0;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 200px;

  @media (max-width: 1074px) {
    width: 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 1074px) {
    display: none;
  }
`;
