import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';
import { numberWithCommas } from '../Util';
const CountryDetial = () => {
  const { countries, isLoading } = useStateContext();
  return (
    <>
      <StyledHeadTable>
        <thead>
          <tr>
            <th scope="col" className="region">
              Region
            </th>
            <th scope="col">Cases</th>
            <th scope="col">New Cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">New Deaths</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
      </StyledHeadTable>
      <StyledCountyDetail>
        <table>
          <tbody>
            {isLoading &&
              countries.map((country, index) => (
                <tr className="country-detial" key={index}>
                  <td className="flag">
                    <img src={country.flag} alt={country.name} />
                    <span>{country.name}</span>
                  </td>
                  <td className="total-cases">
                    {numberWithCommas(country.cases)}
                  </td>
                  <td className="new-cases">
                    {numberWithCommas(country.newCases)}
                  </td>
                  <td className="toatal-deaths">
                    {numberWithCommas(country.deaths)}
                  </td>
                  <td className="new-deaths">
                    {numberWithCommas(country.newDeaths)}
                  </td>
                  <td className="total-recovered">
                    {numberWithCommas(country.recovered)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </StyledCountyDetail>
    </>
  );
};

export default CountryDetial;

const StyledHeadTable = styled.table`
  @media only screen and (max-width: 760px) {
    display: none;
  }
  background-color: #fff;
  width: 100%;
  padding: 15px;
  tr {
    display: flex;
    justify-content: space-between;
  }
  tr th {
    width: 14%;

    font-size: 0.8rem;
    text-align: left;
    &:first-child {
      width: 30%;
    }
  }
`;

const StyledCountyDetail = styled.div`
  height: 500px;
  overflow-y: scroll;
  margin-bottom: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #f8f9fe;
  }
  thead th {
    font-size: 0.9rem;
  }
  th {
    background-color: #fff;
    padding: 20px 0 20px 5px;
    font-weight: bold;
    text-align: left;
  }
  td {
    text-align: left;
    padding: 10px 5px;
    border-bottom: 1px solid #e6ebff;
    font-size: 0.9rem;
  }
  @media only screen and (min-width: 768px) {
    tr.country-detial {
      display: flex;
      justify-content: space-between;
    }
    tr.country-detial td:not(.flag) {
      width: 14%;
    }
    tr.country-detial td.flag {
      width: 30%;
    }
    thead tr {
      display: flex;
    }
  }

  @media only screen and (max-width: 768px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #dce3ff;
    }

    td {
      /* Behave  like a "row" */
      border-bottom: 1px solid #ebebeb;
      position: relative;
      padding: 10px 0;
      padding-left: 50%;

      &:last-child {
        border-bottom: none;
      }
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 50%;
      transform: translateY(-50%);
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 700;
      font-size: 0.8rem;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: 'REGION';
    }
    td:nth-of-type(2):before {
      content: 'TOTAL CASES';
    }
    td:nth-of-type(3):before {
      content: 'NEW CASES';
    }
    td:nth-of-type(4):before {
      content: 'TOTAL DEATHS';
    }
    td:nth-of-type(5):before {
      content: 'NEW DEATHS';
    }
    td:nth-of-type(6):before {
      content: 'TOTAL RECOVERED';
    }
  }
  .flag {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      border-radius: 3px;
      margin-right: 10px;
      @media only screen and (max-width: 760px) {
        width: 30px;
      }
    }
    span {
      text-transform: uppercase;
      font-size: 0.8rem;
    }
  }
`;
