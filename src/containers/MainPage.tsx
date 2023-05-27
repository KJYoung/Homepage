/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { TabState, coreActions, selectCore } from '../store/slices/core';

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
        <MainBtnWrapper>
          <MainBtnPublic onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>Career .. Public </MainBtnPublic>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>Hobby .. Private </MainBtn>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>Photo .. Gallery </MainBtn>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.NEW}))}>Nothing .. New </MainBtn>
        </MainBtnWrapper>
      </MainPageBody>
    </MainPageWrapper>
  );
}

const MainBtnWrapper = styled.div`
  margin-top: 10px;

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
`;

const MainBtn = styled.div`
  padding: 10px;
  background-color: antiquewhite;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;

  cursor: pointer;
`;
const MainBtnPublic = styled(MainBtn)`
   background-color: azure;
`;

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
  background-color: var(--hp-white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Modal Shadow */
  -webkit-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;

  padding-top: 10px;
`;

export default MainPage;
