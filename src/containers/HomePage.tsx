import React from 'react';
import CV from './CV';
import Private from './Private';
import styled from "styled-components";

interface IPropsTab {
    tabState: number;
}  

function HomePage({ tabState }: IPropsTab) {
  
  return (
    <HomePageBody className="App">
      <p>
        홈페이지.
      </p>
      {tabState === 0 && <span> 기본 화면 </span>}
      {tabState === 1 && <CV/>}
      {tabState === 2 && <Private/>}
    </HomePageBody>
  );
}

const HomePageBody = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid red;
`
export default HomePage;
