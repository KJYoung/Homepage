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
        <MainPageTop>
          Welcome to the MainPage of the [Junyoung Kim's] Homepage.
        </MainPageTop>
        <MainBtnWrapper>
          <MainBtnPublic onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PUBLIC}))}>
            Career .. Public <br/> CV, 커리어</MainBtnPublic>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.PRIVATE}))}>Hobby .. Private </MainBtn>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.GALLERY}))}>Photo .. Gallery </MainBtn>
          <MainBtn onClick={() => dispatch(coreActions.setTab({selectedTab: TabState.NEW}))}>Nothing .. New </MainBtn>
        </MainBtnWrapper>
        <MainPageBottom>
          <span>Email : jykim157@snu.ac.kr</span>
          <a href="https://github.com/KJYoung">Github</a>
          <a href="https://www.linkedin.com/in/junyoung-kim-551369256/">LinkedIn</a>
          <a href="https://scholar.google.co.kr/citations?user=w2JODm8AAAAJ&hl=en&oi=sra">Google Scholar</a>
        </MainPageBottom>
      </MainPageBody>
    </MainPageWrapper>
  );
}

const MainPageTop = styled.div`
  display: flex;
`;
const MainPageBottom = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;

  a {
    color: var(--hp-blue);
  }
`;
const MainBtnWrapper = styled.div`
  margin-top: 10px;

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;

  div:nth-child(1) {
    border-bottom: 0.8px solid black;
    border-right: 0.8px solid black;
  };
  div:nth-child(2) {
    border-bottom: 0.8px solid black;
  };
  div:nth-child(3) {
    border-right: 0.8px solid black;
  };
`;

const MainBtn = styled.div`
  padding: 10px;
  background-color: antiquewhite;

  display: flex;
  justify-content: center;
  align-items: center;

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
  width: 1500px;
  max-width: 1500px;
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
