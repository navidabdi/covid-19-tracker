import React, { useEffect, useState } from 'react';
import { useStateContext } from './contexts/StateCovidTracker';
// Components
import CountryDetial from './components/CountryDetial';
import Header from './components/Header';
import TwoSections from './components/TwoSections';
import TotalBox from './components/TotalBox';
import LineGraph from './components/LineGraph';
import Map from './components/Map';
const App = () => {
  const { isLoading } = useStateContext();

  return (
    <>
      <Header />
      <div className="container">
        <TotalBox />
        <Map />
        {/* <LineGraph /> */}
        {/* <TwoSections /> */}
        {/* <div className="counties">{isLoading && <CountryDetial />}</div> */}
      </div>
    </>
  );
};

export default App;
