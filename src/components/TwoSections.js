import React from 'react';
import styled from 'styled-components';
import TotalBox from './TotalBox';
import CountryDetial from './CountryDetial';
import LineGraph from './LineGraph';
import Map from './Map';
const TwoSections = () => {
  return (
    <StyledTwoSections>
      <LineGraph />
      <CountryDetial />
    </StyledTwoSections>
  );
};

export default TwoSections;

const StyledTwoSections = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 1em;
`;
