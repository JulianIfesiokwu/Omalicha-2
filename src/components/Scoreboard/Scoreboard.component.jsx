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
        <p className="score-title">score</p>
        <p className="score-amt">13</p>
      </div>
    </StyledScoreboard>
  );
};

export default Scoreboard;
