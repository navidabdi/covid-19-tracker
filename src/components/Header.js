import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';
import { HumanTime } from '../Util';
// Components
import ContrySelect from './ContrySelect';
// Logo
import logo from '../img/logo.png';
const Header = () => {
  const { countryInfo, isLoading } = useStateContext();
  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <a className="logo" href="/">
            <img src={logo} alt="COVID-19 Tracker Logo" />
            <div className="logo-title">
              <p>COVID-19 TRAKER</p>
              <p className="last-update">
                Updated: {isLoading && HumanTime(countryInfo.updated)}
              </p>
            </div>
          </a>

          <ContrySelect />
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  border-bottom: 2px solid #e8eaff;
  margin-bottom: 2rem;
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0;
    @media only screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      padding: 1rem;
      padding-top: 0;
    }
    img {
      width: 50px;
      margin-right: 0.8rem;
      animation: rotation 10s infinite linear;
    }
    p {
      font-size: 1.3rem;
      font-weight: bold;
      color: #050622;
    }
    .last-update {
      font-size: 0.9rem;
      font-weight: 300;
      margin-top: 3px;
    }
  }
`;
