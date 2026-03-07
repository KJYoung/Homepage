import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore, TabState } from './store/slices/core';
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
import Private from './pages/Private';
import MainPage from './pages/MainPage';
import { DSTEvSemMapping } from './pages/publications/DSTEvSemMapping';

export const NAV_MAIN_PAGE = '/'; // :Public/Public
export const NAV_PRIV_PAGE = '/private';
export const NAV_PROJ_PAGE = '/Projects';
export const NAV_GALL_PAGE = '/gallery';

const RouteTabSync = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    let selectedTab = TabState.PUBLIC;
    if (pathname.startsWith(NAV_GALL_PAGE)) {
      selectedTab = TabState.GALLERY;
    } else if (pathname.startsWith(NAV_PROJ_PAGE)) {
      selectedTab = TabState.PROJECTS;
    } else if (pathname.startsWith(NAV_PRIV_PAGE)) {
      selectedTab = TabState.PRIVATE;
    }
    dispatch(coreActions.setTab({ selectedTab }));
  }, [dispatch, pathname]);

  return null;
};

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
        <RouteTabSync />
        <Header isMobile={windowSize[0] < MOBILE_DESKTOP_THRESHOLD} language={language}/>
        <ReactNotifications />
        <Body>
          <Routes>
            <Route path={NAV_MAIN_PAGE} element={<MainPage />} />
            <Route path={NAV_GALL_PAGE} element={<Gallery isMobile={false}/>} />
            <Route path={NAV_PRIV_PAGE} element={<Private />} />

            <Route path={`${NAV_PROJ_PAGE}`} element={<PublicationsMain />} />
            <Route path={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} element={<EvidentialSemanticMapping />} />
            <Route path={`${NAV_PROJ_PAGE}/E2-BKI`} element={<GaussianSemanticMapping />} />
            <Route path={`${NAV_PROJ_PAGE}/Fully-Evidential-Semantic-Mapping`} element={<DSTEvSemMapping />} />

            {/* Redirects */}
            <Route path="USB" element={<Navigate to={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} replace />} />
            <Route path="EBS" element={<Navigate to={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} replace />} />
            <Route path="Evidential-Semantic-Mapping" element={<Navigate to={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} replace />} />

            <Route path={`${NAV_PROJ_PAGE}/USB`} element={<Navigate to={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} replace />} />
            <Route path={`${NAV_PROJ_PAGE}/EBS`} element={<Navigate to={`${NAV_PROJ_PAGE}/Evidential-Semantic-Mapping`} replace />} />
            <Route path={`${NAV_PROJ_PAGE}/DST-Evidential-Semantic-Mapping`} element={<Navigate to={`${NAV_PROJ_PAGE}/Fully-Evidential-Semantic-Mapping`} replace />} />

            <Route path="/Experimental/elements" element={<ExpElements />} />
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
