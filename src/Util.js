import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const HumanTime = (timestamp) => {
  let dateObject = new Date(timestamp);
  const finalDate = `
  ${dateObject.toLocaleString('en-US', {
    month: 'long',
  })} ${dateObject.toLocaleString('en-US', {
    day: 'numeric',
  })}, ${dateObject.toLocaleString('en-US', { year: 'numeric' })}`;
  return finalDate;
};
const casesTypeColors = {
  cases: {
    hex: '#3639ae',
    rgb: 'rgb(54, 57, 174)',
    half_op: 'rgba(54, 57, 174,.5)',
    multiplier: 200,
  },
  recovered: {
    hex: '#82c519',
    rgb: 'rgb(130, 197 ,25)',
    half_op: 'rgba(130, 197, 25,.5)',
    multiplier: 300,
  },
  deaths: {
    hex: '#e00000',
    rgb: 'rgb(224, 0 ,0)',
    half_op: 'rgba(224, 0, 0,.5)',
    multiplier: 1500,
  },
  population: {
    hex: '#2c6dff',
    rgb: 'rgb(44, 109, 255)',
    half_op: 'rgba(44, 109, 255,.5)',
    multiplier: 50,
  },
  active: {
    hex: '#2c6dff',
    rgb: 'rgb(44, 109, 255)',
    half_op: 'rgba(44, 109, 255,.5)',
    multiplier: 400,
  },
  todayCases: {
    hex: '#ff6a07',
    rgb: 'rgb(255, 106, 7)',
    half_op: 'rgba(255, 106, 7,.5)',
    multiplier: 10000,
  },
  todayDeaths: {
    hex: '#b70202',
    rgb: 'rgb(183, 2, 2)',
    half_op: 'rgba(183, 2, 2,.5)',
    multiplier: 100000,
  },
  todayRecovered: {
    hex: '#82c519',
    rgb: 'rgb(130, 197 ,25)',
    half_op: 'rgba(130, 197, 25,.5)',
    multiplier: 4000,
  },
};
const useCaseType = (country, cases) => {
  switch (cases) {
    case 'population':
      return numeral(country.population).format('0,0');
    case 'deaths':
      return numeral(country.deaths).format('0,0');
    case 'recovered':
      return numeral(country.recovered).format('0,0');
    case 'active':
      return numeral(country.active).format('0,0');
    case 'todayCases':
      return numeral(country.todayCases).format('0,0');
    case 'todayDeaths':
      return numeral(country.todayDeaths).format('0,0');
    case 'todayRecovered':
      return numeral(country.todayRecovered).format('0,0');
    default:
      return numeral(country.cases).format('0,0');
  }
};
export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            {/* {console.log(useCaseType(country, casesType))} */}
            {casesType}: {useCaseType(country, casesType)}
          </div>
          {/* <div className="info-confirmed">
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format('0,0')}
          </div> */}
        </div>
      </Popup>
    </Circle>
  ));
