import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore } from './store/slices/core';
import { MOBILE_DESKTOP_THRESHOLD } from './styles/GlobalConst';
import { ReactNotifications } from 'react-notifications-component';
import { ProjectsMain } from './pages/projects/Projects';
import { ExpElements } from './pages/experimental/Elements';
import { EvidentialSemanticMapping } from './pages/projects/EvidentialSemanticMapping';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import { PublicDep } from './pages/PublicDep';
import Private from './pages/Private';
import New from './pages/New';
import MainPage from './pages/MainPage';
import PublicEn from './pages/public/Public';

const RedirectComponent = ({ red_url } : { red_url : string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(red_url);
  }, [navigate, red_url]);
  return <>
    <span>Redirecting...</span>
  </>
};

export const NAV_MAIN_PAGE = '/'; // :Public/Public
export const NAV_PRIV_PAGE = '/private';
export const NAV_PROJ_PAGE = '/Projects';
export const NAV_GALL_PAGE = '/gallery';
export const NAV_NEWW_PAGE = '/new';
export const NAV_LOBBY_PAGE = '/lobby';

function App() {
  // Window Size. If windowSize[0] < 1200, Show mobile style.
  const dispatch = useDispatch();
  const { windowSize, language } = useSelector(selectCore);
  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(coreActions.setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <>
      <GlobalStyles />
      <Background>
      <HashRouter>
        <Header isMobile={windowSize[0] < MOBILE_DESKTOP_THRESHOLD} language={language}/>
        <ReactNotifications />
        <Body>
          <Routes>
            <Route path={NAV_MAIN_PAGE} element={<PublicEn />} />
            <Route path={NAV_GALL_PAGE} element={<Gallery isMobile={false}/>} />
            <Route path={NAV_PRIV_PAGE} element={<Private />} />
            <Route path={NAV_NEWW_PAGE} element={<New />} />
            <Route path={NAV_LOBBY_PAGE} element={<MainPage />} />

            <Route path="/KR/" element={<PublicDep />}/>
            <Route
              path={`${NAV_PROJ_PAGE}/*`}
              element={
                <Routes>
                  <Route path="/" element={ <ProjectsMain /> } />

                  {/* First Paper [IROS 2024 - Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference] */}
                  <Route path="USB" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping/" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
                  <Route path="Evidential-Semantic-Mapping" element={<EvidentialSemanticMapping />} />
                </Routes>
              }
            />
            <Route
              path="/Experimental/*"
              element={
                <Routes>
                    <Route path="/elements" element={<ExpElements />} />
                </Routes>
              } 
            />
            <Route
              path="*"
              element={
                <>
                  <div>Page Not Found</div>
                </>
              }
            />
          </Routes>
        </Body>
        <Footer />
      </HashRouter>
      </Background>
    </>
  );
}

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

export default App;
