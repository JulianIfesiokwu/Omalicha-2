import React from "react";
import StyledScoreboard from "../../Styled/Scoreboard.styled";

const Scoreboard = () => {
  return (
    <StyledScoreboard>
      <div className="title">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
      </div>
      <div className="score">
        <p className="score-title">SCORE</p>
        <p className="current-score">13</p>
      </div>
    </StyledScoreboard>
  );
};

export default Scoreboard;
