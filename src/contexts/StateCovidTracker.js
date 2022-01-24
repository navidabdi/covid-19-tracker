import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
const StateContext = createContext();

export const StateCovidTracker = ({ children }) => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);
  // The Date
  //   State Of Loading
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const [countryInfo, setCountryInfo] = useState({});
  const [selectCountry, setSelectCountry] = useState('WordWide');
  const [countryValue, setCountryValue] = useState('WordWide');
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });

  const [mapZoom, setMapZoom] = useState(3.2);

  const url =
    countryValue === 'WordWide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryValue}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        if (countryValue === 'WordWide') {
          setMapCenter([34.80746, -40.4796]);
          setMapZoom(3);
        }
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  }, [countryValue]);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
            newCases: country.todayCases,
            deaths: country.deaths,
            newDeaths: country.todayDeaths,
            recovered: country.recovered,
            flag: country.countryInfo.flag,
          }));
          setCountries(countries);
          setMapCountries(data);
          setIsLoading(true);
        });
    };

    getCountriesData();
  }, []);

  // States
  return (
    <StateContext.Provider
      value={{
        countries,
        countryInfo,
        darkMode,
        setDarkMode,
        isLoading,
        selectCountry,
        setSelectCountry,
        countryValue,
        setCountryValue,
        mapCenter,
        mapZoom,
        mapCountries,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
