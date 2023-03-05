import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header, { TabState } from "./components/Header";
import Gallery from "./containers/Gallery";
import MainPage from "./containers/MainPage";
import New from "./containers/New";
import Private from "./containers/Private";
import Public from "./containers/Public";
import { selectCore } from "./store/slices/core";

export const MobileApp = () => {
    const coreState = useSelector(selectCore);
    
    return (
      <Routes>
        <Route
          path="Homepage/*"
          element={
            <>
              <Background>
                <Header isMobile={true}/>
                <Body>
                  {coreState.selectedTab === TabState.MAIN && <MainPage />}
                  {coreState.selectedTab === TabState.PUBLIC && <Public />}
                  {coreState.selectedTab === TabState.PRIVATE && <Private />}
                  {coreState.selectedTab === TabState.GALLERY && <Gallery />}
                  {coreState.selectedTab === TabState.NEW && <New />}
                </Body>
                <Footer />
              </Background>
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
  
  const Background = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: var(--hp-gray);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  const Body = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: var(--hp-back);
    min-height: 95vh;
    height: 100%;
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  `;