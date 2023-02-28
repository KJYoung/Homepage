import React, { useState } from 'react';
import CV from './CV';
import Private from './Private';

function HomePage() {
  const [tabState, setTabState] = useState(0);
  return (
    <div className="App">
      <div>
        <button onClick={() => setTabState(0)}>MAIN</button>
        <button onClick={() => setTabState(1)}>PUBLIC</button>
        <button onClick={() => setTabState(2)}>PRIVATE</button>
      </div>
      <p>
        홈페이지.
      </p>
      {tabState === 0 && <span> 기본 화면 </span>}
      {tabState === 1 && <CV/>}
      {tabState === 2 && <Private/>}
    </div>
  );
}

export default HomePage;
