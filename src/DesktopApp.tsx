import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./containers/Gallery";
import MainPage from "./containers/MainPage";
import New from "./containers/New";
import Private from "./containers/Private";
import Public from "./containers/Public";
import { selectCore, TabState } from "./store/slices/core";
import { LANGUAGE } from "./utils/Language";
import PublicEn from "./containers/PublicEn";

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