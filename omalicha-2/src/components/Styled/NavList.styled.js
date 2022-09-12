import styled from "styled-components";

const StyledNavlist = styled.nav`
  display: flex;
  align-items: center;
  list-style-type: none;

  .link {
    margin-left: 2rem;
    text-decoration: none;
    color: var(--font-color);
    font-family: var(--font-text);
    font-weight: 700;
    font-size: 1.2rem;

    &.active {
      color: var(--font-color);
    }
  }

  .color {
    color: #bc4864;
  }

  @media only screen and (max-width: 600px) {
    z-index: 100;
    flex-direction: column;
    align-items: end;
    position: absolute;
    top: 3.5rem;
    right: 1rem;
    left: 1rem;
    background: white;

    .link {
      text-align: center;
      margin-right: 0;
      margin-top: 0.5rem;
      border-bottom: 1px solid var(--logo-color);
      width: 100%;
      padding: 0.5rem;
    }

    .link:nth-child(4) {
      border-bottom: none;
    }
  }
`;

export default StyledNavlist;
