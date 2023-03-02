import React from 'react';
import styled from "styled-components";

function MainPage() {
  return (
    <MainPageBody>
      <p>
        Welcome to the MainPage.
        메인 페이지.
      </p>
    </MainPageBody>
  );
}

const MainPageBody = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 600px;
    margin-top: 100px;
    border: 1px solid red;
    background-color: var(--hp-white);

    display: flex;
    justify-content: center;
    align-items: center;

    /* Modal Shadow */
    -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
`
export default MainPage;
