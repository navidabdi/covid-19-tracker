import React, { useState } from 'react';

import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';
const ContrySelect = () => {
  const {
    countries,
    isLoading,
    selectCountry,
    setSelectCountry,
    countryValue,
    setCountryValue,
  } = useStateContext();
  // const [selectCountry, setSelectCountry] = useState('WordWide');
  const [openSelectCountry, setOpenSelectCountry] = useState(false);

  const selectWrap = document.querySelector('.select_wrap');
  if (selectWrap) {
    if (openSelectCountry) {
      selectWrap.classList.add('active');
    } else {
      selectWrap.classList.remove('active');
    }
  }

  return (
    <>
      {isLoading && (
        <StyledContrySelect className="wrapper">
          <div className="select_wrap">
            <ul
              onClick={() => setOpenSelectCountry(!openSelectCountry)}
              className="default_option"
            >
              <li>{selectCountry}</li>
            </ul>
            <ul className="select_ul">
              <li
                onClick={() => {
                  setSelectCountry('WordWide');
                  setCountryValue('WordWide');
                  setOpenSelectCountry(!openSelectCountry);
                }}
              >
                WordWide
              </li>
              {countries.map((country, index) => (
                <li
                  onClick={() => {
                    setSelectCountry(country.name);
                    setOpenSelectCountry(!openSelectCountry);
                    setCountryValue(country.value);
                  }}
                  key={index}
                  value={country.value}
                >
                  {country.name}
                </li>
              ))}
            </ul>
          </div>
        </StyledContrySelect>
      )}
    </>
  );
};

export default ContrySelect;

const StyledContrySelect = styled.div`
  z-index: 999;
  .select_wrap {
    box-shadow: 0 15px 30px 0 rgba(20, 50, 90, 0.05);
    background-color: #fff;
    font-size: 16px;
    height: 50px;
    padding: 8px;
    color: #000;
    font-weight: 500;
    width: 300px;
    border: 0;
    position: relative;
    user-select: none;
    overflow: hidden;
  }
  .select_wrap .default_option::before {
    transition: all 0.3s ease-in-out;
  }

  .select_wrap .default_option {
    background: #fff;
    position: relative;
    cursor: pointer;
  }

  .select_wrap .default_option li {
    padding: 10px 20px;
  }

  .select_wrap .default_option:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 18px;
    width: 6px;
    height: 6px;
    border: 2px solid;
    border-color: transparent transparent #555555 #555555;
    transform: translateY(-50%) rotate(-45deg);
  }

  .select_wrap .select_ul {
    background: #fff;
    border-radius: 0;
    height: 50vh;
    overflow-y: scroll;
    box-shadow: 0 20px 30px 0 rgba(38, 57, 52, 0.1);
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(103, 58, 183, 0.1) !important;
    }
  }

  .select_wrap .select_ul li {
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #eee;
    }
  }

  .select_wrap.active {
    overflow: unset;
  }
  .select_wrap.active .select_ul {
    top: 50px;
  }

  .select_wrap.active .default_option:before {
    top: 50%;
    transform: translateY(-50%) rotate(-225deg);
  }
`;
