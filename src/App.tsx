import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { DesktopApp } from './DesktopApp';
import { MobileApp } from './MobileApp';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore } from './store/slices/core';
import { MOBILE_DESKTOP_THRESHOLD } from './styles/GlobalConst';
import { ReactNotifications } from 'react-notifications-component';
import { ProjectsMain } from './pages/projects/Projects';
import { ExpElements } from './pages/experimental/Elements';
import { EvidentialSemanticMapping } from './pages/projects/EvidentialSemanticMapping';

const RedirectComponent = ({ red_url } : { red_url : string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(red_url);
  }, [navigate, red_url]);
  return <>
    <span>Redirecting...</span>
  </>
};

function App() {
  // Window Size. If windowSize[0] < 1200, Show mobile style.
  const dispatch = useDispatch();
  // const { windowSize, language } = useSelector(selectCore);
  const { windowSize } = useSelector(selectCore);
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
      <HashRouter>
        <ReactNotifications />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DesktopApp language='EN'/>
              </>
            }
          />
          <Route
            path="/KR/"
            element={
              <>
                {windowSize[0] < MOBILE_DESKTOP_THRESHOLD ? <MobileApp language='KO'/> : <DesktopApp language='KO'/>}
              </>
            }
          />
          <Route
            path="/Projects/*"
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
      </HashRouter>
    </>
  );
}

export default App;
