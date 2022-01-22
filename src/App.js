import React, { useEffect, useState } from 'react';
import { useStateContext } from './contexts/StateCovidTracker';
// Components
import CountryDetial from './components/CountryDetial';
import TotalBox from './components/TotalBox';
import Header from './components/Header';

const App = () => {
  const { isLoading } = useStateContext();

  return (
    <>
      <Header />
      <div className="container">
        <TotalBox />
        <div className="counties">{isLoading && <CountryDetial />}</div>
      </div>
    </>
  );
};

export default App;
