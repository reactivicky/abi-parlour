import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "primary" ? "#d97c6b" : "transparent"};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid white" : "none"};
`;

const Button = ({ variant = "primary", children }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
