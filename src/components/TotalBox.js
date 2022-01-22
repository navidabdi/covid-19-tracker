import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';

// Images
import covidDefault from '../img/covid-defult.svg';

const TotalBox = () => {
  return (
    <StyledTotalBox>
      <div className="icon">
        <img src={covidDefault} alt="" />
      </div>
      <div className="info">
        <h3>Total Cases</h3>
        <h4>7125453</h4>
      </div>
    </StyledTotalBox>
  );
};

export default TotalBox;

const StyledTotalBox = styled.div`
  box-shadow: 0 15px 30px 0 rgba(20, 50, 90, 0.05);
  border-color: #3639ae;
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 30px;
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
