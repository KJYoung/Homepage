import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore } from './store/slices/core';
import { MOBILE_DESKTOP_THRESHOLD } from './styles/GlobalConst';
import { ReactNotifications } from 'react-notifications-component';
import { PublicationsMain } from './pages/publications/PublicationsMain';
import { ExpElements } from './pages/experimental/Elements';
import { EvidentialSemanticMapping } from './pages/publications/EvidentialSemanticMapping';
import { GaussianSemanticMapping } from './pages/publications/GaussianSemanticMapping';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import { PublicDep } from './pages/PublicDep';
import Private from './pages/Private';
import New from './pages/New';
import MainPage from './pages/MainPage';
import PublicEn from './pages/public/Public';
import { DSTEvSemMapping } from './pages/publications/DSTEvSemMapping';

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
  useEffect(() => {
    dispatch(coreActions.setWindowSize({ width: window.innerWidth, height: window.innerHeight }));

    const handleWindowResize = () => {
      dispatch(coreActions.setWindowSize({ width: window.innerWidth, height: window.innerHeight }));
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch]);
  const { windowSize, language } = useSelector(selectCore);
  const GlobalStylesProxy = GlobalStyles as unknown as React.ComponentType;
  return (
    <>
      <GlobalStylesProxy />
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

            <Route path="/KR/*" element={<PublicDep />}/>

            {/* Redirects */}
            <Route path="USB" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
            <Route path="EBS" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
            <Route path="Evidential-Semantic-Mapping" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}

            <Route
              path={`${NAV_PROJ_PAGE}/*`}
              element={
                <Routes>
                  <Route path="/" element={ <PublicationsMain /> } />

                  {/* First Paper [IROS 2024 - Evidential Semantic Mapping in Off-road Environments with Uncertainty-aware Bayesian Kernel Inference] */}
                  <Route path="USB" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
                  <Route path="EBS" element={<RedirectComponent red_url="/Projects/Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
                  <Route path="Evidential-Semantic-Mapping" element={<EvidentialSemanticMapping />} />

                  {/* Second Paper [RA-L 2025 - E2-BKI: Evidential Ellipsoidal Bayesian Kernel Inference for Uncertainty-aware Gaussian Semantic Mapping] */}
                  <Route path="E2-BKI" element={<GaussianSemanticMapping />} />
                  
                  <Route path="DST-Evidential-Semantic-Mapping" element={<RedirectComponent red_url="/Projects/Fully-Evidential-Semantic-Mapping" />} />  {/* // Alias for Uncertainty-aware Semantic BKI */}
                  <Route path="Fully-Evidential-Semantic-Mapping" element={<DSTEvSemMapping />} />
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

  overflow: auto;
`;

export default App;
