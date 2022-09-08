import styled from "styled-components";

const StyledServices = styled.div`
  padding: 3rem;
  text-align: center;

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
  }

  @media only screen and (max-width: 600px) {
    .all-services {
      flex-direction: column;
      gap: 5%;
    }
  }
`;

export default StyledServices;
