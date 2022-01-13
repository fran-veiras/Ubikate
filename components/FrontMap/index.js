import { Box, Heading, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { HiLocationMarker } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { LocationMarker } from './LocationMarker';

export default function FrontMap({ data }) {
  // const [LocationCoords, setLocationCoords] = useState([-34.6083, -58.371234]);

  var position = [-34.6083, -58.371234];

  // const location = useSelector((state) => state.location.data);

  // useEffect(() => {
  //   if (location[0]) {
  //     setLocationCoords(location[0].coords);
  //   } else {
  //     return console.log('noup');
  //   }
  // }, [location]);

  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: 700, width: '100%' }}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
      />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.data.map((val) => (
        <LocationMarker key={val.id} position={val.coords} />
      ))}
    </MapContainer>
  );
}
