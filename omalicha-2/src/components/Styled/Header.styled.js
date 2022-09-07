import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-container {
    width: 30px;
    img {
      width: 100%;
    }
  }

  .menu-icon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
    .menu-icon {
      display: block;
    }

    .open {
      dipslay: block;
    }

    .close {
      display: none;
    }
  }
`;

export default StyledHeader;
