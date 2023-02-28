import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import styled from "styled-components";

function App() {
  return (
    <Background>
      <Header>
        Welcome to the Homepage.
      </Header>
      <div className="App">
        <HomePage />
      </div>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blanchedalmond;
`;

const Header = styled.div`
  width: 100%;
  height: 250px;
  background-color: aliceblue;
`;
export default App;
