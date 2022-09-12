import styled from "styled-components";

const StyledWelcome = styled.div`
  margin-top: 3rem;
  padding: 0 4rem;
  display: flex;
  gap: 2%;
  overflow: hidden;
  height: 70vh;

  .company {
    display: block;
    font-size: 2.3rem;
    font-family: var(--logo-font-family);
    color: var(--logo-color);
  }

  //make these two columns equal width
  .column-one,
  .column-three {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-family: var(--font-text);
    color: var(--font-color);
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .about {
    line-height: 35px;
    font-family: var(--font-text);
  }

  .column-three {
    background: #ebe9eb;
  }

  .info {
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .details {
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    flex-direction: column;
    padding: 0 1rem;
    height: auto;
    gap: 5%:

    .title {
      margin-bottom: 1rem;
    }

    .about { 
      line-height: 30px;
      margin-bottom: 1rem;
    }

    .column-one,
    .column-three {
      width: 100%;
      text-align: center;
    }

    .column-two {
      margin-bottom: 2rem;
    }
  }
`;

export default StyledWelcome;
