import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { showDataOnMap } from '../Util';
import { useStateContext } from '../contexts/StateCovidTracker';
import 'leaflet/dist/leaflet.css';
const Map = () => {
  const { mapCountries, casesType, mapCenter, mapZoom } = useStateContext();
  return (
    <StyledMap className="map">
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, casesType)}
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
  margin-bottom: 2rem;
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
    margin: 1.2rem;
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
    height: 60px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 3px;
    margin-bottom: 8px;
  }

  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 1rem;
    margin-top: 5px;
  }
`;
