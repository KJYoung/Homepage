import React from 'react';
import styled from "styled-components";

function MainPage() {
  return (
    <MainPageBody>
      <div>
        Welcome to the MainPage.
        메인 페이지.
      </div>
      <div>
        <span>2017.03 ~ 2019.02 한성과학고등학교 조기졸업</span>
        <span>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)</span>
        <span>2023.06 ~ 2026.05 ROND 복무</span>
      </div>
    </MainPageBody>
  );
}

const MainPageBody = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    min-height: 600px;
    margin-top: 100px;
    border: 1px solid black;
    background-color: var(--hp-white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }
    /* Modal Shadow */
    -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
`;

export default MainPage;
