import React, { useState } from 'react';
import './App.css';
import './styles/color.css';
import HomePage from './containers/HomePage';
import styled from "styled-components";
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    img {
      -webkit-user-drag: none;
    }
    a {
      -webkit-user-drag: none;
    }
    select {
      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    }
    strong{
      font-weight: bold;
    }
    em{
      font-style: italic;
    }
  }
  html {
    height: 100%;
  }
  body {
    box-sizing: border-box;
    min-height: 100%;
    line-height: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  #root {
    min-height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>
                {/* <ReactNotifications /> */}
                <InsideComponent />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const InsideComponent = () => {
  const [tabState, setTabState] = useState(0);
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Background>
              <Header>
                Welcome to the Homepage.
                <div>
                  <button onClick={() => navigate("/")}>GO TO HOME</button>
                  <button onClick={() => setTabState(0)}>MAIN</button>
                  <button onClick={() => setTabState(1)}>PUBLIC</button>
                  <button onClick={() => setTabState(2)}>PRIVATE</button>
                  <button onClick={() => navigate("/new")}>GO TO NEW</button>
                </div>
              </Header>
              <Body>
                <Routes>
                  <Route path="" element={<HomePage tabState={tabState}/>} />
                  <Route path="new" element={<div><span>NEW PAGE</span></div>} />
                </Routes>
              </Body>
            </Background>
          </>
        }
      />
    </Routes>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--hp-back);
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--hp-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`
export default App;
