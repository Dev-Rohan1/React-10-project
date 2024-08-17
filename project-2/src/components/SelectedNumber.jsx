import styled from "styled-components";

const SelectedNumber = ({ selectNUmber, setSelectNUmber, error, setError }) => {
  const numberList = [1, 2, 3, 4, 5, 6];

  const selectHandler = (value) => {
    setSelectNUmber(value);
    setError("");
  };

  console.log(selectNUmber);

  return (
    <SelectBox>
      <P>{error}</P>
      <Boxs>
        {numberList.map((value, index) => {
          return (
            <Box
              isselected={value === selectNUmber}
              onClick={() => selectHandler(value)}
              key={index}
            >
              {value}
            </Box>
          );
        })}
      </Boxs>
      <Span>Select Number</Span>
    </SelectBox>
  );
};

export default SelectedNumber;

const SelectBox = styled.div`
  text-align: right;
  @media (max-width: 550px) {
    text-align: center;
  }
`;

const Boxs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 1.5px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.isselected ? "black" : "")};
  color: ${(props) => (props.isselected ? "white" : "")};
`;

const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

const P = styled.p`
  color: red;
  text-transform: capitalize;
  font-size: 17px;
  margin-bottom: 10px;
`;
