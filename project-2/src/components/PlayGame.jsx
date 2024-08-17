import { styled } from "styled-components";
import dicesImage from "../assets/images/dices.png";

const PlayGame = ({ toggleGamePlay }) => {
  return (
    <Section>
      <DiceContainer>
        <DiceWrapper>
          <Image src={dicesImage} alt="image"></Image>
          <DiceContent>
            <H1>DICE GAME</H1>
            <Button onClick={toggleGamePlay}>Play Now</Button>
          </DiceContent>
        </DiceWrapper>
      </DiceContainer>
    </Section>
  );
};

export default PlayGame;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiceContainer = styled.div`
  width: 1140px;
`;

const DiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 500px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

const DiceContent = styled.div``;

const H1 = styled.h1`
  font-size: 55px;
  font-weight: 800;
  padding-bottom: 10px;
  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

const Button = styled.button`
  background-color: black;
  color: #fff;
  border: 1.5px solid black;
  border-radius: 8px;
  padding: 10px 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s ease;
  &:hover {
    border: 1.5px solid #000;
    background-color: #fff;
    color: #000;
  }
`;
