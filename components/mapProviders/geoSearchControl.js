import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';
import { useDispatch } from 'react-redux';
import * as locationActions from '../../app/locationReducer/locationReducer';

const SearchControl = (props) => {
  const dispatch = useDispatch();

  const handleLocations = (place) => {
    dispatch(locationActions.getData(place));
  };

  const map = useMap();

  useEffect(() => {
    function searchEventHandler(result) {
      handleLocations(result.location);
    }

    map.on('geosearch/showlocation', searchEventHandler);

    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
};
export default SearchControl;
