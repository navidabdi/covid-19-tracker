import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';
import { numberWithCommas } from '../Util';
// Images
import covidDefault from '../img/covid-defult.svg';
import covidRed from '../img/covid-red.svg';
import covidGreen from '../img/covid-green.svg';
import covidBlue from '../img/covid-blue.svg';
import covidOrange from '../img/covid-orange.svg';
import covidRedDark from '../img/covid-redark.svg';

const TotalBox = () => {
  const { countryInfo, isLoading } = useStateContext();
  const {
    population,
    cases,
    deaths,
    recovered,
    active,
    todayCases,
    todayDeaths,
    todayRecovered,
    tests,
  } = countryInfo;
  return (
    <>
      {isLoading && (
        <StyeldAllTotalBoxes>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidBlue} alt="" />
            </div>
            <div className="info">
              <h3>Population</h3>
              <h4>{numberWithCommas(population)}</h4>
            </div>
          </StyledTotalBox>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidDefault} alt="" />
            </div>
            <div className="info">
              <h3>Total Tests</h3>
              <h4>{numberWithCommas(tests)}</h4>
            </div>
          </StyledTotalBox>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidDefault} alt="" />
            </div>
            <div className="info">
              <h3>Total Cases</h3>
              <h4>{numberWithCommas(cases)}</h4>
            </div>
          </StyledTotalBox>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidRed} alt="" />
            </div>
            <div className="info">
              <h3>Total Deaths</h3>
              <h4>{numberWithCommas(deaths)}</h4>
            </div>
          </StyledTotalBox>

          <StyledTotalBox>
            <div className="icon">
              <img src={covidGreen} alt="" />
            </div>
            <div className="info">
              <h3>Total Recovered</h3>
              <h4>{numberWithCommas(recovered)}</h4>
            </div>
          </StyledTotalBox>

          <StyledTotalBox>
            <div className="icon">
              <img src={covidBlue} alt="" />
            </div>
            <div className="info">
              <h3>Total Active</h3>
              <h4>{numberWithCommas(active)}</h4>
            </div>
          </StyledTotalBox>

          <StyledTotalBox>
            <div className="icon">
              <img src={covidOrange} alt="" />
            </div>
            <div className="info">
              <h3>Today Cases</h3>
              <h4>{numberWithCommas(todayCases)}</h4>
            </div>
          </StyledTotalBox>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidRedDark} alt="" />
            </div>
            <div className="info">
              <h3>Today Deaths</h3>
              <h4>{numberWithCommas(todayDeaths)}</h4>
            </div>
          </StyledTotalBox>
          <StyledTotalBox>
            <div className="icon">
              <img src={covidGreen} alt="" />
            </div>
            <div className="info">
              <h3>Today Recovered</h3>
              <h4>{numberWithCommas(todayRecovered)}</h4>
            </div>
          </StyledTotalBox>
        </StyeldAllTotalBoxes>
      )}
    </>
  );
};

export default TotalBox;

const StyeldAllTotalBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(318px, 1fr));
  grid-gap: 2em;
  margin-bottom: 2rem;
`;

const StyledTotalBox = styled.div`
  box-shadow: 0 15px 30px 0 rgba(20, 50, 90, 0.05);
  border-color: #3639ae;
  background: #fff;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  &:hover .icon img {
    animation: rotation 5s infinite linear;
  }
  .icon {
    width: 140px;
    height: 140px;
    position: absolute;
    right: -30px;
    top: -30px;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    opacity: 0.1;
    img {
      width: 100%;
      transition: all 0.5s;
    }
  }
  .info h3 {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin: -15px -20px 10px -20px;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .info h4 {
    color: #3639ae;
    font-size: 35px;
    margin-bottom: 0;
    font-weight: 600;
  }
`;
