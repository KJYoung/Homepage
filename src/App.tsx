import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <BrowserRouter>
        <ReactNotifications />
        <Routes>
          <Route
            path="*"
            element={
              <>
                {language === 'EN' && 
                  <DesktopApp language='EN'/>
                }
                {language === 'KO' && <>
                  {windowSize[0] < MOBILE_DESKTOP_THRESHOLD ? <MobileApp language='KO'/> : <DesktopApp language='KO'/>}
                </>}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
