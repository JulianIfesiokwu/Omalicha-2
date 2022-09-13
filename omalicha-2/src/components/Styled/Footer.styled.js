import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  gap: 2%;

  .logo-container {
    width: 60px;
    margin: 0 auto;
    margin-bottom: 1rem;
    img {
      width: 100%;
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
  }

  .col-one,
  .col-two,
  .col-three,
  .col-four {
    padding: 1rem;
    width: 100%;
  }

  .col-two,
  .col-three,
  .col-four {
    border-left: 2px solid var(--logo-color);
  }

  .title {
    text-transform: uppercase;
    color: var(--font-color);
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 27px;
  }

  .footer-info {
    color: var(--font-color);
  }

  .footer-info::hover {
    color: var(--logo-color);
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1rem;

    .col-two,
    .col-three,
    .col-four {
      border-left: none;
      text-align: center;
    }
  }
`;

export default StyledFooter;
