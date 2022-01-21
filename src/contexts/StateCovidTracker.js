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
  useEffect(() => {
    const getCountriesData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            cases: country.cases,
            new: country.todayCases,
            deaths: country.deaths,
            newDeaths: country.todayDeaths,
            recovered: country.recovered,
            flag: country.countryInfo.flag,
          }));
          setCountries(countries);
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
        darkMode,
        setDarkMode,
        isLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
