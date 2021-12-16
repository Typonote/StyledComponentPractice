import styled from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
function App() {
  return (
    <Father as="header">
      <Box bgColor="teal">
        <Text>One</Text>
      </Box>
      <Circle bgColor="tomato">
        <Text>Two</Text>
      </Circle>
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
