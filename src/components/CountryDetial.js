import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';

const CountryDetial = () => {
  const { countries, isLoading } = useStateContext();
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Region</th>
          <th scope="col">Total Cases</th>
          <th scope="col">New Cases</th>
          <th scope="col">Total Deaths</th>
          <th scope="col">New Deaths</th>
          <th scope="col">Total Recovered</th>
        </tr>
      </thead>
      <tbody>
        {isLoading &&
          countries.map((country, index) => (
            <StyledCountyDetail className="country-detial" key={index}>
              <td className="flag">
                <img src={country.flag} alt={country.name} />
                <span>{country.name}</span>
              </td>
              {/* <td className="name">{country.name}</td> */}
              <td className="total-cases">{country.cases}</td>
              <td className="new-cases">{country.new}</td>
              <td className="toatal-deaths">{country.deaths}</td>
              <td className="new-deaths">{country.newDeaths}</td>
              <td className="total-recovered">{country.recovered}</td>
            </StyledCountyDetail>
          ))}
      </tbody>
    </table>
  );
};

export default CountryDetial;

const StyledCountyDetail = styled.tr`
  .flag {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin-right: 10px;
    }
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-align: left;
    }
  }
  /* grid-template-columns: repeat(auto-fit, minmax(50px, 1fr)); */
`;
