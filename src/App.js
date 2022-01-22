import React, { useEffect, useState } from 'react';
import { useStateContext } from './contexts/StateCovidTracker';
// Components
import CountryDetial from './components/CountryDetial';
function App() {
  const { isLoading } = useStateContext();

  return (
    <div className="containerr">
      {/* <div className="others">2</div> */}
      <div className="counties">{isLoading && <CountryDetial />}</div>
    </div>
  );
}

export default App;
