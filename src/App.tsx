import React from 'react';
import './App.css';
import './styles/color.css';
import styled from "styled-components";
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CV from './containers/Public';
import Private from './containers/Private';
import Header from './components/Header';
import Footer from './components/Footer';
import New from './containers/New';
import MainPage from './containers/MainPage';

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
  return (
    <Routes>
      <Route
        path="Homepage/*"
        element={
          <>
            <Background>
              <Header />
              <Body>
                <Routes>
                  <Route path="public" element={<CV />} />
                  <Route path="private" element={<Private />} />
                  <Route path="new" element={<New />} />
                  <Route path="*" element={<MainPage />} />
                </Routes>
              </Body>
              <Footer />
            </Background>
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            Something Wrong.
          </>
        } />
    </Routes>
  );
};

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: var(--hp-back);
`;

const Body = styled.div`
  width: 100%;
  min-height: 95vh;
  height: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export default App;
