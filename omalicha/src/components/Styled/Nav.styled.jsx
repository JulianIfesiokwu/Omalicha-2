import styled from "styled-components";

const StyledNav = styled.ul`
  padding: 1rem;
  list-style-type: none;
  display: flex;

  li {
    margin-left: 2rem;
  }

  li:hover {
    cursor: pointer;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default StyledNav;
