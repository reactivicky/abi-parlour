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
  transition: all 0.1s ease-in;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid white" : "none"};

  :hover {
    scale: 1.05;
  }
`;

const Button = ({ variant = "primary", children, className }) => {
  return (
    <StyledButton variant={variant} className={className}>
      {children}
    </StyledButton>
  );
};

export default Button;
