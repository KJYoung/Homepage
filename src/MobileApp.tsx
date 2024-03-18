import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Gallery from "./pages/Gallery";
import MainPage from "./pages/MainPage";
import New from "./pages/New";
import Private from "./pages/Private";
import Public from "./pages/Public";
import { selectCore, TabState } from "./store/slices/core";
import { LANGUAGE } from "./utils/Language";

interface MobileAppProps {
  language: LANGUAGE
};

export const MobileApp = ({ language } : MobileAppProps) => {
    const coreState = useSelector(selectCore);
    
    return (
      <Routes>
        <Route
          path="Homepage/*"
          element={
            <>
                <Body>
                  {coreState.selectedTab === TabState.MAIN && <MainPage />}
                  {coreState.selectedTab === TabState.PUBLIC && <Public />}
                  {coreState.selectedTab === TabState.PRIVATE && <Private />}
                  {coreState.selectedTab === TabState.GALLERY && <Gallery isMobile={true}/>}
                  {coreState.selectedTab === TabState.NEW && <New />}
                </Body>
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
  
  const Body = styled.div`
    width: 100%;
    min-width: 500px;
    background-color: var(--hp-back);
    min-height: 95vh;
    height: 100%;
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  `;