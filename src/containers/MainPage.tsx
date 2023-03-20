import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { selectCore } from '../store/slices/core';

function MainPage() {
  const { windowSize } = useSelector(selectCore);
  return (
    <MainPageWrapper>
      <MainPageBody>
        <div>
          Welcome to the MainPage of the /Junyoung Kim's/ Homepage.
        </div>
        <div>
          <span>2017.03 ~ 2019.02 한성과학고등학교 조기졸업</span>
          <span>2019.03 ~ 2023.02 서울대학교 졸업(생명과학부, 컴퓨터공학부 복수전공)</span>
          <span>2023.06 ~ 2026.05 ROND 복무</span>
        </div>
      </MainPageBody>
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
`;
const MainPageBody = styled.div`
  width: 1200px;
  max-width: 1200px;
  height: 600px;
  min-height: 600px;
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
  -webkit-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

export default MainPage;
