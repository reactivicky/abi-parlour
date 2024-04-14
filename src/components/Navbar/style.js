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

  li a,
  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgba(256, 256, 256, 0.8);
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in;

    :hover {
      color: rgba(256, 256, 256, 1);
    }
  }

  @media (max-width: 1074px) {
    display: none;
  }
`;
