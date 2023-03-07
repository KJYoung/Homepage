import React from 'react';
import styled from "styled-components";
import { CustomImageDivSlider } from '../customs/CustomImageSlider';
import { GALLERY_ROOT } from '../DATA/Gallery_URL';

function MainPage() {
  return (
    <MainPageWrapper>
      <MainPageCover>
        <CustomImageDivSlider width={1728} height={750} images={[
          <MainPageDiv>
            <img key={1} src={`${GALLERY_ROOT}FRANCE/20230117_Paris1.jpg`} style={{ width: `${1728}px`, maxHeight: `${750}px`}} alt="imgElement"/>
          </MainPageDiv>,
          <MainPageDiv>
            <img key={2} src={`${GALLERY_ROOT}FRANCE/20230117_Paris2.jpg`} style={{ width: `${1728}px`, maxHeight: `${750}px`}} alt="imgElement"/>
          </MainPageDiv>,
          <MainPageDiv>
            <img key={3} src={`${GALLERY_ROOT}FRANCE/20230118_Paris3.jpg`} style={{ width: `${1728}px`, maxHeight: `${750}px`}} alt="imgElement"/>
          </MainPageDiv>,
          <MainPageDiv>
            <img key={4} src={`${GALLERY_ROOT}FRANCE/20230118_Paris4.jpg`} style={{ width: `${1728}px`, maxHeight: `${750}px`}} alt="imgElement"/>
          </MainPageDiv>,
        ]} slideShow={{periodicChange: 8000, transTime: 1.0}}/>
      </MainPageCover>
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
  height: 1150px;
  position: relative;
`;
const MainPageDiv = styled.div`
  > img {
    filter: blur(6px);
    -webkit-filter: blur(6px);
  }
`;
const MainPageCover = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 600px;
  background-color: var(--hp-white);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const MainPageBody = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;
  margin-left: -600px;
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
  -webkit-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 10px 12px rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

export default MainPage;
