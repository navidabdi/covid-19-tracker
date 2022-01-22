import React, { useEffect, useState } from 'react';
import { useStateContext } from './contexts/StateCovidTracker';
// Components
import CountryDetial from './components/CountryDetial';
import TotalBox from './components/TotalBox';

const App = () => {
  const { isLoading } = useStateContext();

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <TotalBox />
        </div>
        <div className="col-3">
          <TotalBox />
        </div>
        <div className="col-3">
          <TotalBox />
        </div>
      </div>
      <div className="counties">{isLoading && <CountryDetial />}</div>
    </div>
  );
};

export default App;
