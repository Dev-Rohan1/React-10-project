import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Score>
      <H1>{score}</H1>
      <Span>Total Score</Span>
    </Score>
  );
};

export default TotalScore;

const Score = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 45px;
`;

const Span = styled.span`
  font-size: 18px;
`;
