import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import * as locationActions from '../../app/locationReducer/locationReducer';
import { useMap } from 'react-leaflet';
import { icon } from 'leaflet';

function LocationMarker() {
  const ICON = icon({
    iconUrl: '/marker.png',
    iconSize: [32, 32],
  });

  const map = useMap();
  const dispatch = useDispatch();

  const [position, setPosition] = useState(null);

  const handleLocations = (place) => {
    dispatch(locationActions.getData(place));
  };

  function searchEventHandler(result) {
    handleLocations(result);
  }

  useEffect(() => {
    searchEventHandler(position);
  }, [position]);

  useEffect(() => {
    map.on('geosearch/showlocation', function (result) {
      setPosition([result.location.y, result.location.x]);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here.</Popup>
    </Marker>
  );
}

export default LocationMarker;
