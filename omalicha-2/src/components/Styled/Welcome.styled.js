import styled from "styled-components";

const StyledWelcome = styled.div`
  margin-top: 3rem;
  padding: 0 4rem;
  display: flex;
  gap: 2%;
  overflow: hidden;
  height: 70vh;

  //make these two columns equal width
  .column-one,
  .column-three {
    width: 90%;
    text-align: center;
    padding: 1rem;
  }

  img-container {
    img {
      width: 100;
      height: auto;
    }
  }

  .title {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .about {
    line-height: 35px;
  }

  .column-three {
    background: #222;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0 1rem;
    height: auto;
    gap: 5%:

    .column-one, .column-three {
        width: 100%;
    }
  }
`;

export default StyledWelcome;
