import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import MainPage from "./pages/MainPage";
import New from "./pages/New";
import Private from "./pages/Private";
import Public from "./pages/Public";
import { selectCore, TabState } from "./store/slices/core";
import { LANGUAGE } from "./utils/Language";
import PublicEn from "./pages/PublicEn";

interface DesktopAppProps {
  language: LANGUAGE
};

export const DesktopApp = ( { language } : DesktopAppProps) => {
    const coreState = useSelector(selectCore);
    
    if(language === 'KO'){
      return (
        <>
          <Background>
            <Header isMobile={false} language={language}/>
            <Body>
              {coreState.selectedTab === TabState.MAIN && <MainPage />}
              {coreState.selectedTab === TabState.PUBLIC && <Public />}
              {coreState.selectedTab === TabState.PRIVATE && <Private />}
              {coreState.selectedTab === TabState.GALLERY && <Gallery isMobile={false}/>}
              {coreState.selectedTab === TabState.NEW && <New />}
            </Body>
            <Footer />
          </Background>
        </>
      );
    }else if(language === 'EN'){
      return (
        <>
          <Background>
            <Header isMobile={false} language={language}/>
            <Body>
              <PublicEn />
            </Body>
            <Footer />
          </Background>
        </>
      );
    }else{
      return <>
        <span>Unreachable</span>
      </>
    }
  };
  
  const Background = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background-color: var(--hp-back);
  `;
  
  const Body = styled.div`
    width: 100%;
    min-height: 95vh;
    height: 100%;
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  `;