import styled from "styled-components";

const StyledScoreboard = styled.div`
  border: 2px solid hsl(217, 16%, 45%);
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  width: 40%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  color: hsl(217, 16%, 45%);

  .title {
    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      line-height: 26px;
      color: white;
    }
  }

  .score {
    width: 25%;
    height: 100%;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    padding: 0.5rem;
  }

  .score-title {
    font-size: 0.8rem;
    color: hsl(229, 64%, 46%);
  }
  .current-score {
    font-size: 2.5rem;
    color: hsl(229, 25%, 31%);
    font-weight: 700;
    letter-spacing: 2px;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default StyledScoreboard;
