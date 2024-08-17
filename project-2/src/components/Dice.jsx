import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const Dice = ({
  diceNumber,
  roleDice,
  resetScore,
  showRules,
  setShowRules,
}) => {
  const toogleRules = () => {
    setShowRules((prev) => !prev);
  };
  return (
    <DiceContainer>
      <DiceBox>
        <Image
          onClick={() => roleDice()}
          src={`../../public/images/dice_${diceNumber}.png`}
        ></Image>
        <Span>Click on Dice to roll</Span>
        <ResetButton onClick={resetScore}>Reset</ResetButton>
        <ShowRules onClick={toogleRules}>
          {showRules ? "Hide" : "Show"} Rules
        </ShowRules>
        {showRules && <Rules />}
      </DiceBox>
    </DiceContainer>
  );
};

export default Dice;

const DiceContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const DiceBox = styled.div``;

const Image = styled.img`
  width: 200px;
  cursor: pointer;
`;

const Span = styled.span`
  display: block;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ResetButton = styled.button`
  border: 1.5px solid black;
  padding: 9px 65px;
  border-radius: 8px;
  background-color: white;
  color: black;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3ms ease;
  display: block;
  margin: auto;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const ShowRules = styled.button`
  border: 1.5px solid black;
  padding: 10px 40px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.3ms ease;
  &:hover {
    background-color: white;
    color: black;
  }
`;
