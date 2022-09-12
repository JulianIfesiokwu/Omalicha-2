import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
  }
  .img-container {
    margin-right: 0.5rem;
    width: 30px;
    img {
      width: 100%;
    }
  }

  .company-name {
    font-size: 1.3rem;
    font-family: var(--logo-font-family);
    color: var(--logo-color);
  }

  .menu-icon {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    .menu-icon {
      display: block;
    }

    .open {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
    }

    .close {
      display: none;
    }
  }
`;

export default StyledHeader;
