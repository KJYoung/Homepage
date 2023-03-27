/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { coreActions, selectCore } from '../store/slices/core';

function MainPage() {
  const { windowSize } = useSelector(selectCore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coreActions.setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
  }, []);

  return (
    <MainPageWrapper>
      <MainPageBody>
        <div>
          Welcome to the MainPage of the /Junyoung Kim's/ Homepage.
        </div>
        <div>
          <span>현재 훈련소</span>
          <span>Career .. Public </span>
          <span>Hobby .. Private </span>
          <span>Photo .. Gallery </span>
          <span>Nothing .. New </span>
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
