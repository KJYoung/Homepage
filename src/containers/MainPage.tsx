import React from 'react';
import styled from "styled-components";


function MainPage() {
  
  return (
    <MainPageBody className="App">
      <p>
        Welcome to the MainPage.
        메인 페이지.
      </p>
    </MainPageBody>
  );
}

const MainPageBody = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
`
export default MainPage;
