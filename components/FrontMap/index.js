import { Box, Heading, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { icon } from 'leaflet';
import * as GeoSearch from 'leaflet-geosearch';

export default function FrontMap() {
  const [LocationCoords, setLocationCoords] = useState([-34.6083, -58.371234]);

  var position = LocationCoords;

  const location = useSelector((state) => state.location.data);

  useEffect(() => {
    if (location[0]) {
      setLocationCoords(location[0].coords);
    } else {
      return console.log('noup');
    }
  }, [location]);

  const ICON = icon({
    iconUrl: '/marker.png',
    iconSize: [32, 32],
  });

  return (
    <MapContainer
      center={LocationCoords}
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
      <Marker icon={ICON} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
