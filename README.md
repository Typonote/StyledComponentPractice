#### 개인 공부 
https://styled-components.com/ 
<br>
<br>
<br>
# 왜 Styled Components 인가??



Styled Components는 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 가장 대표적인 CSS-in-JS 라이브러리로, 
<br>React, Vue와 같은 모던 자바스크립트 프레임워크에서 컴포넌트 기반 개발 방법이 방법이 주류가 됨에 따라 각광받고 있다.<br>


## 1. 설치 및 import

```
1. npm install styled-components OR yarn add styled-components


2. import styled from "styled-components";
```

## 2. styled components 만들기

만들고자하는 컴포넌트의 render 함수 밖에서 다음과 같은 문법 형식으로 만든다.
```
const 컴포넌트명 = styled.태그명

const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
      <Box>
        <Text>Hello</Text>
      </Box>
  );
}

```

## 3. props 전달받아 사용하기 &  styled component 상속하기

```
상속 => const 컴포넌트명 = styled.스타일 컴포넌트명

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled.(Box)`    // Box의 background-color, width, height를 상속받는다.
  border-radius: 50px;  
`;

function App() {
  return (
      <Box bgColor="teal" /> 
      <Circle bgColor="tomato" />
  );
}

```

## 4. As 

```
const Btn = styled.button`
  color: white;
`;

function App() {
  return (
      <Btn as="a" href="/">    // button component를 a태그 처럼 사용할 수 있다.
         Home
      </Btn>
  );
}
```

## 5. Attr

```
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
      <Input />  // 3개의 컴포넌트 모두에 required와 minLength 속성이 설정되어 있다.
      <Input />
      <Input />
  );
}
```

## 6. Pseudo Selector: styled component 안에 element를 선택하는 방법


```
const Apple = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  
  ${Apple}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Apple>Yes Hover</Apple>.  // font-size가 98px로 변경됨.
      </Box>
      <Apple>No Hover</Apple>.     // font-siz 변경 x
    </Wrapper>
  );
}
```
