import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../contexts/StateCovidTracker';
// Logo
import logo from '../img/logo.png';
const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <nav>
          <a className="logo" href="/">
            <img src={logo} alt="COVID-19 Tracker Logo" />
            <p>COVID-19 Tracker</p>
          </a>
          <h3 className="last-update">Updated: January 22, 2022</h3>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  margin-bottom: 2rem;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    height: 12vh;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      margin-right: 0.8rem;
      animation: rotation 10s infinite linear;
    }
    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #050622;
    }
  }
`;