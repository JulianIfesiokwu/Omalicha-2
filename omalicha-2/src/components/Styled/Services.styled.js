import styled from "styled-components";

const StyledServices = styled.div`
  padding: 4rem;
  text-align: center;

  .title {
    font-family: var(--font-text);
    color: var(--font-color);
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .all-services {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
  }

  .hair,
  .nails,
  .make-up {
    width: 50%;
    background-color: #ebe9eb;
    padding: 2rem 1rem;
  }

  .hair p,
  .nails p,
  .make-up p {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem;
    .all-services {
      flex-direction: column;
      gap: 5%;
    }

    .hair,
    .nails,
    .make-up {
      width: 100%;
      background-color: #ebe9eb;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export default StyledServices;
