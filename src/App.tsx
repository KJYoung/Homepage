import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { DesktopApp } from './DesktopApp';
import { MobileApp } from './MobileApp';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore } from './store/slices/core';
import { MOBILE_DESKTOP_THRESHOLD } from './styles/GlobalConst';
import { ReactNotifications } from 'react-notifications-component';

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
                <Route path="USB"
                  element={
                    <>
                      <span>USB... Coming Soon...</span>
                    </>
                  }
                />
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
