import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#121c28" : "transparent"};
  color: white;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  border-radius: 0.2rem;
  align-self: flex-start;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid white" : "none"};
`;

const Button = ({ variant = "primary", children }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
