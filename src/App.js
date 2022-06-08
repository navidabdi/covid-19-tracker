import React from 'react';
// Components
import Header from './components/Header';
import TotalBox from './components/TotalBox';
import Map from './components/Map';
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <TotalBox />
        <Map />
      </div>
    </>
  );
};

export default App;
