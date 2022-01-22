import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';

const CountryDetial = () => {
  const { countries, isLoading } = useStateContext();
  return (
    <StyledCountyDetail>
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
            <tr className="country-detial" key={index}>
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
            </tr>
          ))}
      </tbody>
    </StyledCountyDetail>
  );
};

export default CountryDetial;

const StyledCountyDetail = styled.table`
  width: 100%;
  border-collapse: collapse;
  @media only screen and (max-width: 760px) {
    /* Force table to not be like tables anymore */

    display: block;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: bold;
  }
  td,
  th {
    padding: 6px;
    text-align: left;
  }
  @media only screen and (max-width: 760px) {
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
      border: 1px solid #ccc;
    }
    tr:nth-of-type(odd) td {
      border-bottom: 1px solid rgb(255, 255, 255);
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding: 10px 0;
      padding-left: 50%;
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
      width: 50px;
      margin-right: 10px;
      @media only screen and (max-width: 760px) {
        width: 30px;
      }
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
`;
