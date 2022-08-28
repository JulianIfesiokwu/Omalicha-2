import styled from "styled-components";

const StyledNavlist = styled.nav`
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    margin-right: 2rem;
  }

  .icon {
    vertical-lign: middle;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: end;
    position: absolute;
    top: 4rem;
    right: 1rem;
    left: 1rem;

    li {
      margin-right: 0;
      margin-top: 2rem;
    }
  }
`;

export default StyledNavlist;
