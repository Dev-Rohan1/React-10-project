import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <H3>How to play dice game</H3>
      <RulesList>
        <ListItem>Select any number</ListItem>
        <ListItem>Click on dice image</ListItem>
        <ListItem>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </ListItem>
        <ListItem>
          if you get wrong guess then 2 point will be dedcuted{" "}
        </ListItem>
      </RulesList>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 650px;
  width: 100%;
  background-color: #fbf1f1;
  margin: auto;
  text-align: left;
  padding: 15px;
  border-radius: 8px;
`;

const H3 = styled.h3``;

const RulesList = styled.ol`
  padding: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
