import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/color.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { DesktopApp } from './DesktopApp';
import { MobileApp } from './MobileApp';

function App() {
  // Window Size. If windowSize[0] < 1200, Show mobile style.
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
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
