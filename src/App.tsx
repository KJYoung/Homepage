import React, { useEffect } from 'react';
import './App.css';
import './styles/color.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { DesktopApp } from './DesktopApp';
import { MobileApp } from './MobileApp';
import { useDispatch, useSelector } from 'react-redux';
import { coreActions, selectCore } from './store/slices/core';

function App() {
  // Window Size. If windowSize[0] < 1200, Show mobile style.
  const dispatch = useDispatch();
  const { windowSize } = useSelector(selectCore);
  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(coreActions.setWindowSize({ width: window.innerWidth, height: window.innerHeight }))
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
        <Routes>
          <Route
            path="*"
            element={
              <>
                {/* <ReactNotifications /> */}
                {windowSize[0] < 1200 && <MobileApp />}
                {windowSize[0] >= 1200 && <DesktopApp />}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
