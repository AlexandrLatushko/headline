import React from 'react';
import './App.css';
import styled from "styled-components";
import { MyImg } from './components/Img';
import { Title } from './components/Title';
import { Text } from './components/Text';
import { Btn } from './components/Btn';
import piture from './assets/img/img.jpeg'; 

function App() {
  return (
    <div className="App">
      
      <Box>
        <MyImg src={piture} alt="main image"/>
        <Title>Headline</Title>
        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <Btn>See more</Btn>
        <Btn>Save</Btn>
      </Box>
    </div>
  );
};

export default App;



const Box = styled.div`

  border-radius: 15px;
  width: 300px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: left;
  `

