import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectedNumber from "./SelectedNumber";
import Dice from "./Dice";

const StartGame = () => {
  const [selectNUmber, setSelectNUmber] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () => {
    if (!selectNUmber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setDiceNumber(randomNumber);

    if (selectNUmber === randomNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNUmber("");
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <PlayContainer>
        <TotalScore score={score} />
        <SelectedNumber
          selectNUmber={selectNUmber}
          setSelectNUmber={setSelectNUmber}
          error={error}
          setError={setError}
        />
      </PlayContainer>
      <Dice
        diceNumber={diceNumber}
        roleDice={roleDice}
        resetScore={resetScore}
        showRules={showRules}
        setShowRules={setShowRules}
      />
    </>
  );
};

export default StartGame;

const PlayContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  padding: 0px 20px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
