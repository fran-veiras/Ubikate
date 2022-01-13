import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';

export const LocationMarker = ({ position }) => {
  const ICON = icon({
    iconUrl: '/marker.png',
    iconSize: [32, 32],
  });

  return (
    <Marker icon={ICON} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};
