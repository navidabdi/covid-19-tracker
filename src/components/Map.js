import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { showDataOnMap } from '../Util';
import { useStateContext } from '../contexts/StateCovidTracker';
import 'leaflet/dist/leaflet.css';
const Map = () => {
  const { mapCountries, countries, mapCenter, mapZoom } = useStateContext();
  return (
    <StyledMap className="map">
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, 'cases')}
      </LeafletMap>
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.div`
  height: 450px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 15px 30px 0 rgba(20, 50, 90, 0.05);

  .leaflet-container {
    height: 100%;
    border-radius: 3px;
  }
  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: white;
    color: #333;
    box-shadow: 0 3px 14px rgb(0 0 0 / 40%);
    border-radius: 3px;
  }
  .leaflet-popup-content {
    margin: 15px;
    line-height: 1.4;
  }
  .info-flag img {
    width: 100px;
    border-radius: 5px;
  }

  .info-name {
    font-size: 0.9rem;
    font-weight: bold;
    color: #555;
  }

  .info-container {
    width: 100px;
  }

  .info-flag {
    height: 50px;
    width: 100%;
    background-size: cover;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 0.7rem;
    margin-top: 3px;
  }
`;
