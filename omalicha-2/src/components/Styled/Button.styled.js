import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  background-color: var(--logo-color);
  border: 1px solid var(--logo-color);

  &:hover {
    font-weight: 700;
    color: var(--logo-color);
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export default StyledButton;
