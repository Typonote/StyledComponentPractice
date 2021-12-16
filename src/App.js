import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>One</Text>
      </BoxOne>
      <BoxTwo>
        <Text>Two</Text>
      </BoxTwo>
    </Father>
  );
}

export default App;
