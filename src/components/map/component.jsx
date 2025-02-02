'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Map = ({ dict }) => {
  let position = [42.852111, 74.605192];
  let point = [42.851718, 74.605004];

  const customIconActive = L.icon({
    iconUrl: '/map-marker-active.svg',
    iconSize: [40, 55],
  });

  // const handleGetPoints = useCallback(async () => {
  //   const response = await API.get('/points/');
  //   const data = response.data;
  //   setPointsData(data);
  // }, []);

  // useEffect(() => {
  //   handleGetPoints();
  // }, [handleGetPoints]);

  return (
    <div className={'w-full'}>
      <MapContainer
        className={'z-10 sm:min-h-[304px] min-h-[676px]'}
        center={position}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={point} icon={customIconActive}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
